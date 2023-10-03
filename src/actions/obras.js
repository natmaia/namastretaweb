"use server"

export async function create(formData) {
    //const url = "https://backend-namastreta-production.up.railway.app:8080/api/obra";

    // função que deixa o json formatado
    // console.log(Object.fromEntries(formData))
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options);

    if (resp.status !== 201) {
        const json = await resp.json();
        if (Array.isArray(json.errors)) {
            const mensagens = json.errors.reduce((str, erro) => str += ". " + erro.message, "");
            return { error: "Erro ao cadastrar" + mensagens };
        } else {
            return { error: "Erro ao cadastrar"};
        }
    }

    revalidatePath("/contas");
    return { ok: "Conta cadastrada com sucesso" };

}