import * as api from "./api";

const endpoints = {
  homeGames: "/data/games?sortBy=_createdOn%20desc&distinct=category",
  catalogGames: "/data/games?sortBy=_createdOn%20desc",
};

export const getHomeGames = () => api.getRequest(endpoints.homeGames);

export const getCatalogGames = () => api.getRequest(endpoints.catalogGames);
