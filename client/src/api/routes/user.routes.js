import request from "../request";

const USER_URL = `${process.env.REACT_APP_API_BASE_URL}/user`;

const getUser = () => {
  const result = request(`${USER_URL}/me`, {
    method: "GET",
  });
  console.log("🚀 ~ file: user.routes.js ~ line 11 ~ result ~ result", result);
  return result;
};

export default getUser;
