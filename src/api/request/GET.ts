import axios from "axios";
import { baseURL } from "../baseURL";

export const GET = async (url: string, headers?: any, payload?: any) => {
  try {
    const res = await axios.get(`${baseURL}${url}`, {
      headers,
      params: { payload },
    });
    const { status, data } = res;
    return { status, data };
  } catch (err: any) {
    if (axios.isCancel(err)) {
      console.log("Request was canceled due to timeout");
    } else {
      console.error("Error fetching data:", err.response);
    }
    return {
      status: err.response || err.request.status || 500,
    };
  }
};
