import axios from "axios";

interface IMultiFn {
  (method: "get" | "post" | "put" | "delete", api: string, data?: any, token?: string): any | void;
}
export const multiFn: IMultiFn = async (method, api, data, token) => {
  let response: any;
  if (token) {
    response = await axios({
      method,
      url: `${api}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    response = await axios({
      method,
      url: `${api}`,
      data,
    });
  }
  console.log(await response.data);
  return await response.data;
};
