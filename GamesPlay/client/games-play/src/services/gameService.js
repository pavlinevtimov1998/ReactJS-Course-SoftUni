import * as api from "./api";

const endpoints = {
  getHomeGames: "/data/games?sortBy=_createdOn%20desc",
};

export const getHomeGames = () => api.getRequest(endpoints.getHomeGames);
