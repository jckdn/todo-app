import { handleResponse, handleError } from './api-utils';

const baseUrl = process.env.API_URL + '/items/';

export function getItems() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveItem(item) {
  return fetch(baseUrl + (item.id || ''), {
    method: item.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteItem(itemId) {
  return fetch(baseUrl + itemId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
