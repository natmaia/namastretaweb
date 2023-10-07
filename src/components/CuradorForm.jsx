import React, { useState } from 'react';
import TextInput from "@/components/TextInput";
import { createCurador } from "@/actions/curador";

export default function CuradorForm({ onClose, onCuradorCreated }) {
    const [curadorData, setCuradorData] = useState({
        nome: "",
        descricao: "",
        foto: null, // objeto de arquivo
        categoria: "",
        tempoAtuacao: ""
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            const file = files[0];
            console.log("Objeto de arquivo:", file); 
            setCuradorData(prevData => ({
                ...prevData,
                foto: file 
            }));
        } else {
            setCuradorData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createCurador(curadorData);
            onCuradorCreated(response);  // Atualize o estado do curador no componente pai
            onClose();
        } catch (error) {
            console.error("Erro ao criar curador:", error);
        }
    };
    return (

        <div className="modal">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-600">
                        Nome:
                    </label>
                    <TextInput
                        type="text"
                        id="nome"
                        name="nome"
                        value={curadorData.nome}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-600">
                        Descrição:
                    </label>
                    <TextInput
                        as="textarea"
                        id="descricao"
                        name="descricao"
                        value={curadorData.descricao}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="foto" className="block text-sm font-medium text-gray-600">
                        Foto:
                    </label>
                    <TextInput
                        type="file"
                        id="foto"
                        name="foto"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="categoria" className="block text-sm font-medium text-gray-600">
                        Categoria:
                    </label>
                    <select
                        id="categoria"
                        name="categoria"
                        value={curadorData.categoria}
                        onChange={handleInputChange}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="LOUCURAS_ABSTRATAS">Loucuras Abstratas</option>
                        <option value="MUNDO_SURREAL">MUNDO SURREAL</option>
                        {/* Adicione outras opções de categoria aqui */}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="tempoAtuacao" className="block text-sm font-medium text-gray-600">
                        Tempo de Atuação:
                    </label>
                    <TextInput
                        type="text"
                        id="tempoAtuacao"
                        name="tempoAtuacao"
                        value={curadorData.tempoAtuacao}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    <button type="submit">Criar Curador</button>
                </div>
            </form>
        </div>
    );
}