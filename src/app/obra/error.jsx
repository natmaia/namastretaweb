'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Button from "@/components/Button"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex justify-center items-center p-10 flex-col'>
      <h2>Opa! Um erro aconteceu!</h2>
      <p>{error.message}</p>

      <div className='flex gap-3'>

        <Button
          href="/"
          variant='secundary' >
          Voltar para home
        </Button>

        <Button
          variant='secundary'
          onClick={
            // Recebe o erro e o reset
            () => reset()
          }
        >
          Tente novamente
        </Button>

      </div>



    </div>
  )
}