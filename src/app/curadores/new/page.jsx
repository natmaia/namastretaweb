import CuradorForm from "@/components/CuradorForm";
import NavBar from "@/components/NavBar";

export default async function CuradorNew() {
    return (<div>


        <NavBar active={"curador"} />

        <main className="green-pastel-light mt-5 m-20 p-4 ">
            <h2 className="text-green text-4xl"> Curadores </h2>

            <CuradorForm />
        </main>
    </div>
    )
}