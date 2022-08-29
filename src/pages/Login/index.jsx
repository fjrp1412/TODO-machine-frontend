import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { LoginUI } from './LoginUI';
import { useNavigate } from 'react-router-dom';
import useApi from '@hooks/useApi';

import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState();
  const { response, loading, errors } = useApi({
    url: 'user/token/',
    method: body && 'POST',
    body,
  });

  useEffect(() => {
    if (response?.data.token) {
      window.localStorage.setItem('token', JSON.stringify(response.data.token));
      navigate('/', { replace: true });
    }
    else {
      console.log('errors', errors);
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email required'),
      password: Yup.string().required('Password required'),
    }),
    onSubmit: values => {
      setBody(values);
    },
  });

  return <LoginUI formik={formik} errors={errors}/>;
};

export default Login;
