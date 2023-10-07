import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export default function Card({ nome, descricao, foto }) {
    return (
        <div>
            <div className="grid md:grid-cols-2 md:grid-rows-1 md:p-1 gap-10 rounded-md bg-green justify-center items-center">
                <div id="data" className="md:col-span-1">
                    <div id="data-col" className="p-4">
                        <div className="mb-auto">
                            <span className="font-bold text-xl">{nome}</span>
                        </div>
                        <div className="mb-2">
                            <span>{descricao}</span>
                        </div>
                        <div className="grid md:grid-cols-2 mt-auto">
                            <span className="text-green-800">Ver mais</span>
                            <ArrowRightCircleIcon className="h-6 w-6 text-green-600" />
                        </div>
                    </div>
                </div>
                <div className="md:col-auto flex justify-center items-center">
                    {/* Use a URL da foto dinamicamente */}
                    <div className="mb-4 mt-3">
                        <img src={foto} alt="Imagem" className="w-auto h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
