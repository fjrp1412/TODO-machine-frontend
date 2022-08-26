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

export default function useApi({ url, method, body, token }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    (async function requestApi() {
      if (method === TYPES.POST) {
        try {
          const response = await axiosInstance({
            url: url,
            method: method,
            data: body,
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          setResponse(response);
          setLoading(false);
          setErrors(null);

          console.log('response POST method', response);
        } catch (e) {
          setResponse(null);
          setLoading(false);
          setErrors(e);
        }
      } else if (method === TYPES.GET) {
        const response = await axiosInstance({
          url: url,
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setResponse(response);
        setLoading(false);
        setErrors(null);
        //console.log('response GET method', response);
      } else if (method === TYPES.PATCH) {
        try {
          const response = await axiosInstance({
            url: url,
            method: method,
            data: body,
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          setResponse(response);
          setLoading(false);
          setErrors(null);
          //console.log('response PATCH method', response);
        } catch (e) {
          setResponse(null);
          setLoading(false);
          setErrors(e);
        }
      } else if (method === TYPES.DELETE) {
        const response = await axiosInstance({
          url: url,
          method: method,
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setResponse(response);
        setLoading(false);
        setErrors(null);
       // console.log('response DELETE method', response);
      }
      else {
        setResponse(null);
        setLoading(false);
        setErrors(null);
      }
    })();
  }, [url, method, body]);

  return { response, loading, errors };
}
