import { useFormik } from 'formik';
import { LoginUI } from './LoginUI';
import * as Yup from 'yup';

const Login = () => {
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
    }),
    onSubmit: values => {
      console.log('submit de logi', values);
    },
  });

  return <LoginUI formik={formik} />;
};

export { Login };
