
import { create } from "@/actions/obras";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function FormObra() {
    return (
        <>
            <NavBar active={"obras"} />
            <main className="green-pastel-light mt-10 p-2 rounded max-w-lg m-auto bg-">
                <h1 className="=tex-green text-40"> Cadastrar Obra </h1>

                <form action={create}>
                    <TextInput name="titulo" id="titulo" label="titulo" />
                    <TextInput name="descricao" id="descricao" label="descricao" />
                    
                    <div className="flex justify-around">
                        <Button href="/obra" variant="tertiary" icon={<ArrowLeftIcon className="h6 w-6" />} >Cancelar</Button>
                        <Button element="button" variant="secundary" icon={<CheckIcon className="h6 w-6" />}>
                            Salvar
                        </Button>
                    </div>
                </form>
            </main>

        </>

    )
}