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
            localStorage.setItem("token", response.data.token);
           
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

export const studentRegisterCourse = createAsyncThunk(
    "studentRegister/updateCourses",
    async (course_code: string, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`/courses/register_course/${course_code}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            return response.data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                console.log(error.response)
                return thunkAPI.rejectWithValue(error.response.data);
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

export const markCourseAsCompleted = createAsyncThunk(
    "studentUpdateCourse/completeCourse",
    async (course_code: string, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`/courses/mark_completed/${course_code}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            return response.data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                console.log(error.response)
                return thunkAPI.rejectWithValue(error.response.data);
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
            state.isAuthenticated = false;
            state.error = "";
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.student = action.payload.findStudent;
            state.token = action.payload.token;
            console.log(action.payload)
            toast(action.payload.message);
            state.error = "";
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.error = action.payload as string;
        });

        // Register Courses
        builder.addCase(studentRegisterCourse.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(studentRegisterCourse.fulfilled, (state, action) => {
            state.student = action.payload.data;
            state.message = action.payload.message;
            toast(action.payload.message);
            state.error = "";
            state.isLoading = false;
        });
        builder.addCase(studentRegisterCourse.rejected, (state, action) => {
            state.isLoading = false;
            state.message = "";
            state.error = action.payload as string;
        });
        
        // Mark Courses Completed
        builder.addCase(markCourseAsCompleted.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(markCourseAsCompleted.fulfilled, (state, action) => {
            state.student = action.payload.data;
            state.message = action.payload.message;
            toast(action.payload.message);
            state.error = "";
            state.isLoading = false;
        });
        builder.addCase(markCourseAsCompleted.rejected, (state, action) => {
            state.isLoading = false;
            state.message = "";
            state.error = action.payload as string;
            });
    },
});

// Action creators are generated for each case reducer function
export const { logout, loginSuccess } = studentAuthSlice.actions;

export default studentAuthSlice.reducer;