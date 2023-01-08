import * as api from "./api";

const endpoinds = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export const login = (data) => api.postRequest(endpoinds.login, data);

export const register = (data) => api.postRequest(endpoinds.register, data);

export const logout = (token) => api.getRequest(endpoinds.logout, token);
