import * as api from "./api";

const endpoinds = {
  login: "/users/login",
};

export const login = (data) => api.postRequest(endpoinds.login, data);
