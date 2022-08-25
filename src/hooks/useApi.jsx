import { useState, useEffect } from 'react';
import axios from 'axios';

const TYPES = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default function useApi(url, method, body) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    (async function requestApi() {
      if (method === TYPES.POST) {
        if (body) {
          const response = await axiosInstance({
            url: url,
            method: method,
            data: body,
          });
          setResponse(response);
          setLoading(false);
          setErrors(null);

          console.log('response POST method', response);
        }
      }
    })();
  }, [url, method, body]);

  return { response, loading, errors };
}
