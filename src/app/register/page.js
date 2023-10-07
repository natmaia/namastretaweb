'use client'

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Registre = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        foto: '',
        categoria: '',
        tempoAtuacao: ''
    });
    const [fileInput, setFileInput] = useState(null);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setFileInput(file);
    };

    const handleImage = async () => {
        if (!fileInput) {
            toast.error('Por favor, selecione uma foto.');
            return;
        }

        try {
            const formdata = new FormData();
            formdata.append('file', fileInput, fileInput.name);

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/image/upload', requestOptions);
            const result = await response.json();

            return result.image;
        } catch (error) {
            console.error('Erro ao enviar a foto:', error);
            return ''; // Retorne uma string vazia em caso de erro
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await handleImage();

        const json = {
            nome: formData.nome,
            descricao: formData.descricao,
            foto: url,
            categoria: formData.categoria,
            tempoAtuacao: formData.tempoAtuacao
        };
        console.log(JSON.stringify(json));

        router.push('/login');

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <TextInput type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="descricao">Descrição:</label>
                <TextInput type="text" id="descricao" name="descricao" value={formData.descricao} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="foto">Foto:</label>
                <TextInput type="file" id="foto" onChange={handleFileInputChange} />
            </div>
            <div>
                <label htmlFor="categorias">Categoria:</label>
                <select id="categorias" name="categoria" value={formData.categoria} onChange={handleInputChange}>
                    <option value="" disabled>Selecione uma categoria</option>
                    <option value="LOUCURAS_ABSTRATAS">LOUCURAS ABSTRATAS</option>
                    <option value="MUNDO_SURREAL">MUNDO SURREAL</option>
                    <option value="CORES_VIBRANTES">CORES VIBRANTES</option>
                    <option value="EXPRESSOES_FANTASTICAS">EXPRESSÕES FANTÁSTICAS</option>
                    <option value="FICCAO_CIENTIFICA_VISUAL">FICÇÃO CIENTÍFICA VISUAL</option>
                    <option value="SONHOS_EM_TINTA">SONHOS EM TINTA</option>
                    <option value="IMAGINACAO_DESENFREADA">IMAGINAÇÃO DESENFREADA</option>
                    <option value="DIVERSAO_CRIATIVA">DIVERSÃO CRIATIVA</option>
                    <option value="REALIDADE_ALTERNATIVA">REALIDADE ALTERNATIVA</option>
                    <option value="CAOS_ARTISTICO">CAOS ARTÍSTICO</option>
                </select>
            </div>
            <div>
                <label htmlFor="tempoAtuacao">Tempo de Atuação:</label>
                <TextInput type="text" id="tempoAtuacao" name="tempoAtuacao" value={formData.tempoAtuacao} onChange={handleInputChange} />
            </div>

            <Button type="submit">Enviar</Button>
        </form>
    );
};

export default Registre;


{/* 

<main className="green-pastel-light m-4 mt-1 p-4 ">
<div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 border-green-pastel-dark">
        <div className="p-8 bg-green-pastel-dark border-green-pastel-dark rounded-lg">
            <h2 className="font-bold leading-7 text-creme text-[30px] m-10">Registre-se</h2>
            <p className="m-10 leading-7 text-green-pastel-light">
                Esta informação será exibida publicamente, portanto, tenha cuidado com o que você compartilha.
            </p>
        </div>



        <div>
            <form onSubmit={handleSubmit}>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nome
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Tempo de Atuação
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="tempoAtuacao"
                                id="tempoAtuacao"
                                value={formData.tempoAtuacao}
                                onChange={handleInputChange}
                                autoComplete="given-text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>


                <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 mt-10">
                        Descrição
                    </label>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Escreva algo sobre você.</p>
                    <div className="mt-2">
                        <textarea
                            name="descricao"
                            id="descricao"
                            value={formData.descricao}
                            onChange={handleInputChange}
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 mt-10">
                        Categoria
                    </label>
                    <div className="mt-2">
                        <select
                            name="categoria"
                            id="categoria"
                            value={formData.categoria}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="LOUCURAS_ABSTRATAS">Loucuras Abstratas</option>
                            <option value="MUNDO_SURREAL">MUNDO SURREAL</option>
                            <option value="CORES_VIBRANTES">CORES VIBRANTES</option>
                            <option value="EXPRESSOES_FANTASTICAS">EXPRESSÕES FANTÁSTICAS</option>
                            <option value="FICCAO_CIENTIFICA_VISUAL">FICÇÃO CIENTÍFICA VISUAL</option>
                            <option value="SONHOS_EM_TINTA">SONHOS EM TINTA</option>
                            <option value="IMAGINACAO_DESENFREADA">IMAGINAÇÃO DESENFREADA</option>
                            <option value="DIVERSAO_CRIATIVA">DIVERSÃO CRIATIVA</option>
                            <option value="REALIDADE_ALTERNATIVA">REALIDADE ALTERNATIVA</option>
                            <option value="CAOS_ARTISTICO">CAOS ARTÍSTICO</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="photo" className="block text-2xl font-medium leading-6 mt-10 text-green-pastel-dark">Foto de Perfil</label>
                </div>

                <div className="col-span-full">
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-green-pastel-light" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <TextInput id="file-upload" name="file-upload" onChange={handleFileInputChange} type="file" className="sr-only" />
                                </label>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG  up to 1MB</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Button variant='tertiary' children={"Cancel"} />
                    <Button variant='secundary' type="submit" children={"Salvar"} />
                </div>
            </form>
        </div>





    </div >

</div >

</main >


 */}
