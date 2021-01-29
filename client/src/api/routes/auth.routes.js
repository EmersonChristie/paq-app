import request from "../request";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const AUTH_URL = `${BASE_URL}/auth/`;

const login = (payload) => {
  const url = `${AUTH_URL}/login`;
  const options = {
    method: "POST",
    body: JSON.stringify(payload),
  };
  return { url, options };
  // const result = request(`${AUTH_URL}/login`, {
  //   method: "POST",
  //   body: JSON.stringify(payload),
  // });
  // console.log("🚀 ~ file: auth.routes.js ~ line 11 ~ result ~ result", result);
  // return result;
};

export default login;
