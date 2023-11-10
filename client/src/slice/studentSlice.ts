import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "../api/httpService";

export interface StudentDetails {
    id?: string;
    reg_no?: string;
    firstName?: string;
    lastName?: string;
    year?: string;
    faculty?: string;
    department?: string;
    email?: string;
    password?: string;
    student_image?: string;
}

export interface InitialUserState {
    student: StudentDetails;
    token: string;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string;
    message: string;
}

const initialState: InitialUserState = {
    student: {},
    token: "",
    isAuthenticated: false,
    isLoading: false,
    error: "",
    message: ""
};

export const userLogin = createAsyncThunk(
    "studentAuth/loginUser",
    async (payload: Record<string, string>, thunkAPI) => {
        try {
            const response = await axios.post("/students/login", payload);
            console.log('response is', response.data)
            localStorage.setItem("student", JSON.stringify(response.data.data));
            localStorage.setItem("token", JSON.stringify(response.data.token));
           

            // console.log("response", response.data.token)
            return response.data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data.message);
            }
            if (error.request) {
                return thunkAPI.rejectWithValue("Network Error");
            }
            if (error.message) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
);

// export const userKYC = createAsyncThunk(
//     "usersKYC/updateUser",
//     async (payload: FormData, thunkAPI) => {
//         try {
//             const response = await axios.patch("/users/updateUser", payload);

//             // localStorage.setItem("user", JSON.stringify(response.data.confirmUser));
//             // localStorage.setItem("token", JSON.stringify(response.data.token));


//             // console.log("response", response.data.token)
//             return response.data;
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         } catch (error: any) {
//             if (error.response) {
//                 console.log(error.response)
//                 return thunkAPI.rejectWithValue(error.response.data);
//             }
//             if (error.request) {
//                 return thunkAPI.rejectWithValue("Network Error");
//             }
//             if (error.message) {
//                 return thunkAPI.rejectWithValue(error.message);
//             }
//         }
//     }
// );

export const studentAuthSlice = createSlice({
    name: "studentAuth",
    initialState,
    reducers: {
        logout: (state) => {
            state.student = {};
            state.isAuthenticated = false;
            state.token = "";
            window.location.href = "/";
            localStorage.clear();
        
        },
        loginSuccess: (state, action) => {
            state.student = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            // Add vendor to the state array
            state.isAuthenticated = false;
            state.error = "";
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            // Add vendor to the state array
            state.isAuthenticated = true;
            state.student = action.payload.findStudent;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
            toast(action.payload.message);
            state.error = "";
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            // Add vendor to the state array
            state.isAuthenticated = false;
            state.error = action.payload as string;
        });

        // KYC page info
        // builder.addCase(userKYC.pending, (state) => {
        //     // Add vendor to the state array
        //     state.isLoading = true;
        //     // state.isAuthenticated = false;
        //     state.error = "";
        // });
        // builder.addCase(userKYC.fulfilled, (state, action) => {
        //     // Add vendor to the state array
        //     // state.isAuthenticated = true;
        //     state.student = action.payload.data;
        //     state.message = action.payload.message;
        //     // localStorage.setItem("token", action.payload.token);
        //     toast(action.payload.message);
        //     state.error = "";
        //     state.isLoading = false;
        // });
        // builder.addCase(userKYC.rejected, (state, action) => {
        //     // Add vendor to the state array
        //     state.isLoading = false;
        //     state.message = "";
        //     // state.isAuthenticated = false;
        //     state.error = action.payload as string;
        // });
    },
});

// Action creators are generated for each case reducer function
export const { logout, loginSuccess } = studentAuthSlice.actions;

export default studentAuthSlice.reducer;