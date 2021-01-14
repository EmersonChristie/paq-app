import request from "../request";
export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const createUrl = (base, path) => `${base}${path}`;

const AUTH_URL = `${BASE_URL}/auth`;

const login = (payload) => {
  const result = request(createUrl(AUTH_URL, "/login"), {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log("🚀 ~ file: auth.routes.js ~ line 11 ~ result ~ result", result);
  return result;
};

export default login;
