"use client";

import { updateCurador } from "@/actions/curador";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "./Button";
import TextInput from "./TextInput";
import Image from "next/image";

const CuradorFormEdit = ({ curador }) => {
  const { push } = useRouter();
  const [curadorEdit, SetCuradorEdit] = useState(curador);

  console.log(curadorEdit.foto);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fileInput) {
      const url = await handleImage();

      console.log(url);

      handleInputChange("foto", url);
      console.log(curadorEdit.foto);
    }

    const response = await updateCurador(curadorEdit);

    if (response?.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.ok);
    push("/curadores");
  };

  const handleInputChange = (field, value) => {
    SetCuradorEdit({
      ...curadorEdit,
      [field]: value,
    });
  };

  const [fileInput, setFileInput] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFileInput(file);
  };

  const handleImage = async () => {
    try {
      const formdata = new FormData();
      formdata.append("file", fileInput, fileInput.name);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/image/upload",
        requestOptions
      );
      const result = await response.json();

      return result.image;
    } catch (error) {
      toast.error("Erro ao enviar a foto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <TextInput
          type="text"
          id="nome"
          name="nome"
          value={curadorEdit.nome}
          onChange={(e) => handleInputChange("nome", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <TextInput
          type="text"
          id="descricao"
          name="descricao"
          value={curadorEdit.descricao}
          onChange={(e) => handleInputChange("descricao", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="foto">Foto:</label>
        <TextInput type="file" id="foto" onChange={handleFileInputChange} />
        <Image src={curador.foto} width={100} height={100} />
      </div>

      <div>
        <label htmlFor="categorias">Categoria:</label>
        <select
          id="categorias"
          name="categoria"
          value={curadorEdit.categoria}
          onChange={(e) => handleInputChange("categoria", e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="LOUCURAS_ABSTRATAS">LOUCURAS ABSTRATAS</option>
          <option value="MUNDO_SURREAL">MUNDO SURREAL</option>
          <option value="CORES_VIBRANTES">CORES VIBRANTES</option>
          <option value="EXPRESSOES_FANTASTICAS">EXPRESSÕES FANTÁSTICAS</option>
          <option value="FICCAO_CIENTIFICA_VISUAL">
            FICÇÃO CIENTÍFICA VISUAL
          </option>
          <option value="SONHOS_EM_TINTA">SONHOS EM TINTA</option>
          <option value="IMAGINACAO_DESENFREADA">IMAGINAÇÃO DESENFREADA</option>
          <option value="DIVERSAO_CRIATIVA">DIVERSÃO CRIATIVA</option>
          <option value="REALIDADE_ALTERNATIVA">REALIDADE ALTERNATIVA</option>
          <option value="CAOS_ARTISTICO">CAOS ARTÍSTICO</option>
        </select>
      </div>
      <div>
        <label htmlFor="tempoAtuacao">Tempo de Atuação:</label>
        <TextInput
          type="text"
          id="tempoAtuacao"
          name="tempoAtuacao"
          value={curadorEdit.tempoAtuacao}
          onChange={(e) => handleInputChange("tempoAtuacao", e.target.value)}
        />
      </div>

      <Button element="button">Enviar</Button>
    </form>
  );
};

export default CuradorFormEdit;
