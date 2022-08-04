import { getToken } from "./globalfun";
import { fincoDefault } from "src/axios/axiosinstance";

export const getReference = () => {
  const token = getToken();
  const makeRequest = async () => {
    try {
      const response = await fincoDefault.get(
        "/finco/api/auth/detail/reference",
        {
          headers: {
            token: `${token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.log("error", err);
      alert(err);
    }
  };
  const res = makeRequest();
  return res;
};
