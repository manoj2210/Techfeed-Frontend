import fetch from 'isomorphic-unfetch';
const frontend_url=process.env.frontend_url;

export const login_call = async (url, data,state) => {
  let response = await fetch(`${frontend_url}${url}`, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'x-state': state
    },
    body: JSON.stringify({"data":data})
  });
  return await response.json();
};

export const post = async (url, data) => {
  let response = await fetch(`${frontend_url}/post`, {
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
  let response = await fetch(`${frontend_url}/get`, {
    credentials: 'include',
    headers: {
      'path': url,
    },
    method: 'get'
  });
  return await response.json();
};
