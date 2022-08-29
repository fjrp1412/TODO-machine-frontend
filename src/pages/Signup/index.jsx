import { useState, useEffect } from 'react';
import { replace, useFormik } from 'formik';
import { SignupUI } from './SignupUI';
import { useNavigate } from 'react-router-dom';
import useApi from '@hooks/useApi';
import * as Yup from 'yup';

const Signup = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState();

  const { response, loading, errors } = useApi({
    url: 'user/create/',
    method: body && 'POST',
    body,
  });

  useEffect(() => {
    if (response?.status === 201) {
      navigate('/login', { replace: true });
    } else {
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

  return <SignupUI formik={formik} errors={errors} />;
};

export default Signup;
