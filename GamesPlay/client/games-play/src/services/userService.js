import * as api from "./api";

const endpoinds = {
  login: "/users/login",
  register: "/users/register",
};

export const login = (data) => api.postRequest(endpoinds.login, data);

export const register = (data) => api.postRequest(endpoinds.register, data);
