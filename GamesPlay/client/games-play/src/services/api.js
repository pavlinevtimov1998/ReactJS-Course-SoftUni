const apiUrl = "http://localhost:3030";

async function request(url, options) {
  const res = await fetch(apiUrl + url, options);

  if (res.ok !== true) {
    if (res.status == 403) {
      console.log("403");
    }

    const error = await res.json();
    throw new Error(error.message);
  }

  if (res.status == 203) {
    return res;
  } else {
    return res.json();
  }
}

function createOptions(method, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options["body"] = JSON.stringify(data);
  }

  // options.headers["X-Authorization"] = "";

  return options;
}

export const getRequest = (url) => request(url, createOptions("GET"));

export const postRequest = (url, data) =>
  request(url, createOptions("POST", data));

export const putRequest = (url) => request(url, createOptions("PUT"));

export const deleteRequest = (url) => request(url, createOptions("DELETE"));
