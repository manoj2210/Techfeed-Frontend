import fetch from 'isomorphic-unfetch';

export const post = (url, data) => {
  return fetch(url, {
    method: 'post',
    body: data
  })
    .then(response => {
      if (response.status == 201)
        return response.json();
      else {
        alert("Bad Request");
        console.log(response.json());
        return "ERR";
      }
    })
    .then(message => {
      if (message != "ERR") {
        return message;
      }
      else {
        return "ERR"
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const get = (url) => {
  return fetch(url, {
    method: 'get'
  })
    .then(response => {
      if (response.status == 200)
        return response.json();
      else {
        alert("Bad Request");
        console.log(response.json());
        return "ERR";
      }
    })
    .then(message => {
      if (message != "ERR") {
        return message;
      }
      else {
        return "ERR"
      }
    })
    .catch(err => {
      console.log(err);
    });
}
