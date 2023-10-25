"use server"

import { revalidatePath } from "next/cache";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL + "/curador";

export async function getAllCuradores(nome, page) {
  const response = await fetch(API_URL);

  
  const data = await response.json();

  console.log(data)
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

  if (resp.status !== 201) {

    console.log(resp.status)

    const json = await resp.json();

    console.log(json)

    const mensagens = json?.reduce((str, erro) => str += " "+ erro.field +" " + erro.message, " ")

    return { error: "Erro ao cadastrar" + json.message }
  }
  console.log(resp.status)

  revalidatePath("/curadores")

  return { ok: "curador cadastrado com sucesso!!" }


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

  const response = await fetch(`${API_URL}/${id}`, options);

  if (!response.ok) {
    console.log(response.status)
    return { error: "Falha ao apagar o curador. " }

  }
  revalidatePath("/curadores")
  return { ok: "Curador deletado com sucesso" }

}
