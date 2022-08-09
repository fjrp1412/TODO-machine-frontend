import { useFormik } from 'formik';
import { LoginUI } from './LoginUI';
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: values => {
      console.log('submit de logi', values);
    },
  });

  return <LoginUI formik={formik} />;
};

export { Login };
