import { toast } from "react-toastify";
export const showToast = (message: string) => {
   return toast(message);
};

export const showSuccessToast = (message: string) => {
   return toast.success(message);
};

export const showErrorToast = (message: string) => {
   return toast.error(message);
};