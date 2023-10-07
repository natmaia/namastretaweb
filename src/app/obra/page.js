"use client"
import { deleteObra, getObras } from "@/actions/obras";
import Button from "@/components/Button";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

function Obra() {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getObras();
        setObras(data);
      } catch (error) {
        console.error("Erro ao buscar obras:", error);
      }
    }

    fetchData();
  }, []); 

  const handleDelete = async (id) => {
    try {
      await deleteObra(id);
      setObras(prevObras => prevObras.filter(obra => obra.id !== id));
    } catch (error) {
      console.error("Erro ao excluir obra:", error);
    }
  };

  return (
    <>
      <NavBar active={"obra"} />

      <main className="green-pastel-light mt-5 m-20 p-4">
        <div className="grid md:grid-cols-2 md:grid-rows-1 gap-2 m-4 space-x-96 justify-between items-center">
          <h2 className="text-green text-4xl"> Obras </h2>

          <Button variant="primary" icon={<PlusCircleIcon className="h-6 w-6"/>} href="/obras/new"> Criar Obra </Button>
        </div>

        <div className="grid gap-10 grid-cols-3">
          {obras && obras.map(obra => {
            return <Card key={obra.id} obra={obra} onDelete={() => handleDelete(obra.id)} />;
          })}
        </div>

        
      </main>
    </>
  );
}

export default Obra;
