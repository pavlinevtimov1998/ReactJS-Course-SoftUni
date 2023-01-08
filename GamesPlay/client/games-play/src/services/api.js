const apiUrl = "http://localhost:3030";

async function request(url, options) {
  const res = await fetch(apiUrl + url, options);

  if (res.ok !== true) {
    if (res.status === 403) {
      return null;
    }

    const error = await res.json();
    throw new Error(error.message);
  }

  if (res.status === 203) {
    return res;
  } else {
    return res.json();
  }
}

function createOptions(method, data, token) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options["body"] = JSON.stringify(data);
  }

  if (token) {
    options.headers["X-Authorization"] = token;
  }

  return options;
}

export const getRequest = (url, token) =>
  request(url, createOptions("GET", undefined, token));

export const postRequest = (url, data) =>
  request(url, createOptions("POST", data));

export const putRequest = (url) => request(url, createOptions("PUT"));

export const deleteRequest = (url) => request(url, createOptions("DELETE"));
