"use server"

import { revalidatePath } from "next/cache";

// verificar o http do deploy, tive que fazer outra deploy
const API_URL = "https://backend-namastreta-production.up.railway.app:8080/api/obra";

export async function createObra(formData) {
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    };

    const resp = await fetch(API_URL, options);

    if (resp.status !== 201) {
        const json = await resp.json();
        if (Array.isArray(json.errors)) {
            const mensagens = json.errors.reduce((str, erro) => str += ". " + erro.message, "");
            return { error: "Erro ao cadastrar" + mensagens };
        } else {
            return { error: "Erro ao cadastrar" };
        }
    }

    return { ok: "Obra cadastrada com sucesso" };
}

export async function getObraById(id) {
    const resp = await fetch(`${API_URL}/${id}`);
    const data = await resp.json();
    return data;
}

export async function updateObra(id, formData) {
    const options = {
        method: "PUT",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    };

    const resp = await fetch(`${API_URL}/${id}`, options);
    const data = await resp.json();
    return data;
}

export async function deleteObra(id) {
    const options = {
        method: "DELETE"
    };

    await fetch(`${API_URL}/${id}`, options);
}

}
