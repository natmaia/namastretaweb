import NavBar from "@/components/NavBar";
//import Card from "@/components/Card";

// async function getCurador() {
//   const url = "https://backend-namastreta-production.up.railway.app:8080/api/curador";
//   const response = await fetch(url, { next: { revalidate: 0 } });
//   console.log(response); 
//   return response.json();
// }

export default async function Curador() {
  // const data = await getCurador()

  // console.log(data)


  return (
    <>
      <NavBar active={"curador"} />

      <main className="green-pastel-light mt-5 m-20 p-4 ">
        <h2 className="=tex-green text-40"> Curadores </h2>
      </main>
    </>
  )
}
