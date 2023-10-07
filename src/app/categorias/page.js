import * as React from 'react';
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from "@/components/NavBar";

export default function Categoria() {
  return (
    <>
      <NavBar active={"categorias"} />

      <main className="green-pastel-light m-20 p-8">
        <h2> Categorias </h2>
      </main>

      {/* <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button> */}

    </>
  )
}