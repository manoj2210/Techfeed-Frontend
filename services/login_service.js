import { login_call } from './rest_service';

export async function login(inputs) {
  let formBody = [];
  for (let property in inputs) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(inputs[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  let res = await login_call('/oauth/token', formBody);

  if (!res.error && !res.access_token) {
    return { error: 'server', error_description: 'Something went wrong!' };
  }
  return res;
}
