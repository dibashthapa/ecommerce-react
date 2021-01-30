import * as Yup from "yup";

export const RegisterSchema = Yup.object({
    email: Yup.string()
        .email("Please enter valid email address")
        .required("Please enter email address"),
    password: Yup.string()
        .min(8, "Password must be greater than 8 characters")
        .required("Please enter password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Password must match")
        .required('Confirm Password is required'),
    acceptTerms: Yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required')
        .required('Accept terms and conditions is required')
});