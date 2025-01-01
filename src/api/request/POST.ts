import axios from "axios";
import { baseURL } from "../baseURL";

export const POST = async (url: string, payload: any, headers: any) => {
  try {
    const { data, status } = await axios.post(
      `${baseURL}${url}`,
      payload,
      headers
    );
    console.log(data);
    return { status, data };
  } catch (err: any) {
    const error = err;
    if (error.response) {
      console.log(error.response);
      return { status: error.request.status, data: null };
    } else if (error.request) {
      console.log(error.request);
      return { status: error.request.status, data: null };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      return { status: error.request.status, data: null };
    }
  }
};
