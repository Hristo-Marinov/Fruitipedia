import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllFruits() {
  return await api.get(host + "/data/fruits?sortBy=_createdOn%20desc");
}

export async function getFruitById(id) {
  return await api.get(host + `/data/fruits/${id}`);
}

export async function addFruit(fruit) {
  return await api.post(host + "/data/fruits", fruit);
}

export async function editFruitById(id, fruit) {
  return await api.put(host + `/data/fruits/${id}`, fruit);
}

export async function deleteFruitById(id) {
  return await api.del(host + `/data/fruits/${id}`);
}

export async function search(query) {
  return await api.get(host + `/data/fruits?where=name%20LIKE%20%22${query}%22`);
}

