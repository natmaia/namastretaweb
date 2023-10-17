import NavBar from "@/components/NavBar";
import Card from "@/components/Card";
import { getAllCuradores, deleteCurador } from "@/actions/curador";
import CuradorForm from '@/components/CuradorForm';
import Button from '@/components/Button';

export default async function Curador() {

  const data = await getAllCuradores();

  return (
    <>
      <NavBar active={"curador"} />

      <main className="green-pastel-light mt-5 m-20 p-4 ">
        <div className="grid grid-cols-2 m-10">
          <h2 className="text-green text-4xl"> Curadores </h2>
          <Button variant = "secundary" children={"Criar Novo Curador"} element="link" href="/curadores/new"  />
        </div>

        <div className="grid gap-10 grid-cols-3">
          {data._embedded.curadores.map(curador => (
            <Card key={curador.id} curador={curador}>
              <button onClick={() => console.log("sou bonito")}>Excluir</button>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
