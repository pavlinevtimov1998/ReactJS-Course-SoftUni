const apiUrl = "http://localhost:3005/api";

export const getAll = async () => {
  const res = await fetch(`${apiUrl}/users`);
  const result = await res.json();

  return result.users;
};
