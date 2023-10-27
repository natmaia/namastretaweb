
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import DropCard from './DropCard';
import Image from 'next/image';

export default function Card({ curador }) {


    return (
        <div>
            <div className="grid md:grid-cols-2 md:grid-rows-1 md:p-1 gap-10 rounded-md bg-green justify-center items-center">
                <div id="data" className="md:col-span-1">
                    <div id="data-col" className="p-4">
                        <div className="mb-auto">
                            <span className="font-bold text-xl">{curador.nome}</span>
                        </div>
                        <div className="mb-2">
                            <span>{curador.descricao}</span>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="md:col-auto flex justify-center items-center">
                        {/* Use a URL da foto dinamicamente */}
                        <div className="mb-4 mt-3">
                        <Image src={curador.foto} width={100} height={100} className="rounded-md overflow-hidden" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-auto">
                        <DropCard curador={curador}/>
                    </div>
                </div>
            </div>



        </div>
    );
}
