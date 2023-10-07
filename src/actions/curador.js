"use server"
const API_URL = "https://namastretagallery-springboot-production.up.railway.app/api/curador"; 

export async function getAllCuradores(nome, page) {
  const response = await fetch(`${API_URL}?nome=${nome}&page=${page}`);
  const data = await response.json();
  return data;
}

export async function createCurador(curador) {
  const options = {
    method: "POST",
    body: JSON.stringify(curador),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const resp = await fetch(API_URL, options);
  const data = await resp.json();
  return data;
}

export async function getCuradorById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
}

export async function updateCurador(id, curador) {
  const options = {
    method: "PUT",
    body: JSON.stringify(curador),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const resp = await fetch(`${API_URL}/${id}`, options);
  const data = await resp.json();
  return data;
}

export async function deleteCurador(id) {
  const options = {
    method: "DELETE"
  };

  await fetch(`${API_URL}/${id}`, options);
}
