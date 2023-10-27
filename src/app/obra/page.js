"use client";

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

function Obra() {
  return (
    <>
      <NavBar active={"obra"} />

      <main className="green-pastel-light mt-5 m-20 p-4">
        <div className="grid md:grid-cols-2 md:grid-rows-1 gap-2 m-4 space-x-96 justify-between items-center">
          <h2 className="text-green text-4xl"> Obras </h2>

          <Button
            variant="primary"
            icon={<PlusCircleIcon className="h-6 w-6" />}
            href="/obras/new"
          >
            {" "}
            Criar Obra{" "}
          </Button>
        </div>

        <div className="grid gap-10 grid-cols-3"></div>
      </main>
    </>
  );
}

export default Obra;
