import apiClient from './index';

export async function getPeople() {
  return apiClient
    .get('people')
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}

export async function getPerson(id) {
  return apiClient
    .get(`people/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
