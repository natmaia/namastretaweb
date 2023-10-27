import { getCuradorById } from "@/actions/curador";
import CuradorFormEdit from "@/components/CuradorFormEdit";

const { default: NavBar } = require("@/components/NavBar");

const CuradorEdit = async ({ params }) => {
  const curador = await getCuradorById(params.id);
  return (
    <div>
      <NavBar active={"curador"} />
      <main className="green-pastel-light mt-5 m-20 p-4 ">
        <h2 className="text-green text-4xl"> Editar Curador </h2>
        <CuradorFormEdit curador={curador} />
      </main>
    </div>
  );
};
export default CuradorEdit;
