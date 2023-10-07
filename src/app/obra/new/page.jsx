import { createObra } from "@/actions/obras"; 
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/router"; 

export default function FormObra() {
    const router = useRouter(); 

    const [message, setMessage] = useState("");

    async function handleSubmit(formData) {
        const resp = await createObra(formData); 
        if (resp.error) {
            setMessage(resp.error);
            return;
        }
        router.push("/obras"); 
    }

    return (
        <>
            <NavBar active={"obras"} />
            <main className="green-pastel-light mt-10 p-2 rounded max-w-lg m-auto bg-">
                <h1 className="text-green text-4xl">Cadastrar Obra</h1> 
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e.target); }}> 
                    <TextInput name="titulo" id="titulo" label="Título" /> 
                    <TextInput name="descricao" id="descricao" label="Descrição" /> 
                    
                    <div className="flex justify-around mt-4"> 
                        <Button href="/obras" variant="tertiary" icon={<ArrowLeftIcon className="h-6 w-6" />}>
                            Cancelar
                        </Button>
                        <Button type="submit" variant="secondary" icon={<CheckIcon className="h-6 w-6" />}>
                            Salvar
                        </Button>
                    </div>

                    <p>{message}</p>
                </form>
            </main>
        </>
    );
}
