import * as Yup from 'yup';

const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email('Please enter valid email address')
    .required('Please enter email address'),
});

export default forgotPasswordSchema;
