import axios from 'axios';
const API_URL = import.meta.env.API_URL

const axiosInstance = axios.create({
  baseURL: API_URL,
});

const POST = async ({ url, token, body }) => {
  try {
    const response = await axiosInstance({
      url: url,
      data: body,
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

const PATCH = async ({ url, token, body }) => {
  try {
    const response = await axiosInstance({
      url: url,
      data: body,
      method: 'PATCH',
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

export { POST, PATCH };
