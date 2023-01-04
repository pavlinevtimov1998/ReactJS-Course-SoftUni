const apiUrl = "http://localhost:3005/api";

export const getAll = async () => {
  const res = await fetch(`${apiUrl}/users`);
  const result = await res.json();

  return result.users;
};

export const getOne = async (id) => {
  const res = await fetch(`${apiUrl}/users/${id}`);
  const result = await res.json();

  return result.user;
};

export const create = async (userData) => {
  const res = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const result = await res.json();

  return result.user;
};

export const edit = async (id, userData) => {
  const res = await fetch(`${apiUrl}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await res.json();

  return result.user;
};

export const deleteUser = async (id) => {
  const res = await fetch(`${apiUrl}/users/${id}`, {
    method: "DELETE",
  });
  const result = await res.json();

  return result.userId;
};

export const actions = {
  Details: "details",
  Create: "create",
  Edit: "edit",
  Delete: "delete",
};
