// CAn delet this now since unused.

const baseUrl = process.env.API_URL + '/users/';

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

async function get(path) {
  try {
    const response = await fetch(buildUrl(path));

    console.log('get endpoint reached!');

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function del(path) {
  const request = new Request(buildUrl(path), { method: 'DELETE' });

  try {
    const response = await fetch(request);

    console.log('delete endpoint reached!');

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

async function handleResponse(response) {
  return response.json();
}

function handleError(error) {
  console.log(error);
}

function buildUrl(path) {
  return baseUrl + '/' + path;
}
