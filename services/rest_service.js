import fetch from 'isomorphic-unfetch';

export const login_call = async (url, data) => {
  let response = await fetch(`${url}`, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"data":data})
  });
  return await response.json();
};

export const post = async (url, data) => {
  let response = await fetch("/post", {
    credentials: 'include',
    headers: {
      'path': url,
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: data,
  });
  return await response.json();
};

export const get = async(url) => {
  let response = await fetch("/get", {
    credentials: 'include',
    headers: {
      'path': url,
    },
    method: 'get'
  });
  return await response.json();
};
