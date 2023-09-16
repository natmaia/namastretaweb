import Button from "@/components/Button";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import { PlusCircleIcon } from '@heroicons/react/24/outline'


async function getObras() {
  const url = "https://backend-namastreta-production.up.railway.app:8080/api/obra";
  const response = await fetch(url);
  console.log(response); // Debugging para verificar a resposta da API
  return response.json();
}

export default async function Obra() {
  const data = await getObras()

  return (
    <>
      <NavBar active={"obra"} />

      <main className="green-pastel-light mt-5 m-20 p-4 ">
        <div className="grid md:grid-cols-2 md:grid-rows-1 gap-2 m-4 space-x-96 justify-between items-center
        ">
          <h2 className="=tex-green text-40"> Obras </h2>

          {/* chama o button e faz as alterações via props */}
          <Button icon={<PlusCircleIcon className="h-6 w-6"/>} href="/obra/new"> Criar Obra </Button>
        </div>

        {/* <div className="grid gap-10 grid-cols-3">
          {data && data.map(obra => {
            return <Card obra={obra} />
          })}
        </div> */}

      </main>
    </>
  )
}