import { useFormik } from 'formik';
import { SignupUI } from './SignupUI';
import * as Yup from 'yup';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email required'),
      password: Yup.string().required('Password required'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Repeat password required'),
    }),
    onSubmit: values => {
      console.log('submit de logi', values);
    },
  });

  return <SignupUI formik={formik} />;
};

export default Signup;
