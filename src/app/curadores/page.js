"use client"
import React, { useEffect, useState } from 'react';
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";
import { getAllCuradores, deleteCurador } from "@/actions/curador";
import CuradorForm from '@/components/CuradorForm';
import Button from '@/components/Button';


export default function Curador() {
  const [curadores, setCuradores] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllCuradores(); 
        console.log(data); 
        setCuradores(data._embedded.curadores);
      } catch (error) {
        console.error("Erro ao buscar curadores:", error);
      }
    }
  
    fetchData();
  }, []);
  

  const handleCuradorCreated = (newCurador) => {
    setCuradores(prevCuradores => [...prevCuradores, newCurador]);
  };

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <>
      <NavBar active={"curador"} />

      <main className="green-pastel-light mt-5 m-20 p-4 ">
        <h2 className="text-green text-4xl"> Curadores </h2>

        <div className="grid gap-10 grid-cols-3">
          {curadores.map(curador => (
            <Card key={curador.id} props={curador}>
              <button onClick={() => handleDelete(curador.id)}>Excluir</button>
            </Card>
          ))}
        </div>
        
        <Button children={"Criar Novo Curador"} onClick={handleCreate} />

        {isModalOpen && (
          <CuradorForm onClose={handleCloseModal} onCuradorCreated={handleCuradorCreated} />
        )}
      </main>
    </>
  );
}
