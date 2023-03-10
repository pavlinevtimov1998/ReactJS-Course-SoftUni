import * as api from "./api";

const endpoints = {
  homeGames: "/data/games?sortBy=_createdOn%20desc&distinct=category",
  catalogGames: "/data/games?sortBy=_createdOn%20desc",
  create: "/data/games",
  getOne: "/data/games/",
  getComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
  addComment: "/data/comments",
};

export const getHomeGames = () => api.getRequest(endpoints.homeGames);

export const getCatalogGames = () => api.getRequest(endpoints.catalogGames);

export const createGame = (data, token) =>
  api.postRequest(endpoints.create, data, token);

export const editGame = (gameId, data, token) =>
  api.putRequest(endpoints.getOne + gameId, data, token);

export const getOneGame = (gameId) => api.getRequest(endpoints.getOne + gameId);

export const getComments = (gameId) =>
  api.getRequest(endpoints.getComments(gameId));

export const createComment = (comment, gameId, token) =>
  api.postRequest(endpoints.addComment, { comment, gameId }, token);

export const deleteGame = (gameId, token) =>
  api.deleteRequest(endpoints.getOne + gameId, token);
