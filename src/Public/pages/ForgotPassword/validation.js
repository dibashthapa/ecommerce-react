import * as Yup from "yup";

export const RegisterSchema = Yup.object({
    email: Yup.string()
        .email("Please enter valid email address")
        .required("Please enter email address"),
});