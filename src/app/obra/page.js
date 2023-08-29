import Card from "@/components/Card";
import NavBar from "@/components/NavBar";

async function getObras() {
  const url = "http://localhost:8080/api/obra"
  const response = await fetch(url, { next: { revalidate: 0 } })
  return response.json()
}

export default async function Obra() {
  const data = await getObras()

  console.log(data)

  return (
    <>
      <NavBar active={"obra"} />

      <main className="green-pastel-light mt-5 m-20 p-4 ">
        <h2 className="=tex-green text-40"> Obras </h2>
        <div className="grid gap-10 grid-cols-3">
           {data.map(obra => <Card obra={obra} />)}
        </div>
      </main>
    </>
  )
}