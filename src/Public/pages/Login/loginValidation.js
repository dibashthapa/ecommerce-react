import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
        .email("Please enter valid email address")
        .required("Please enter email address"),
    password: Yup.string()
        .min(8, "Password must be greater than 8 characters")
        .required("Please enter password"),
});