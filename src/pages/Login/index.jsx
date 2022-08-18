import { useFormik } from 'formik';
import { LoginUI } from './LoginUI';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
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
      const userWorkspaces = [
        {
          id: 1,
          title: 'workspace 1',
        },
        {
          id: 2,
          title: 'workspace 2',
        },
        {
          id: 3,
          title: 'workspace 3',
        },
        {
          id: 4,
          title: 'workspace 4',
        },
      ];
      window.localStorage.setItem('token', JSON.stringify('token de prueba'));
      const token = JSON.parse(window.localStorage.getItem('token'));
      window.localStorage.setItem(
        'userWorkspaces',
        JSON.stringify(userWorkspaces)
      );

      if (token) {
        navigate('/', { replace: true });
      }
    },
  });

  return <LoginUI formik={formik} />;
};

export default Login;
