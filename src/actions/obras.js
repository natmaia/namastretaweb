"use server"

export async function create(formData) {
    const url = "http://localhost:8080/api/obra";

    console.log(formData)

    // função que deixa o json formatado
    console.log(Object.fromEntries(formData))
    // const data =
    //     {
    //         titulo: "Título da Nova Obra",
    //         descricao: "Descrição da Nova Obra"
    //     }

    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(url, options)
}