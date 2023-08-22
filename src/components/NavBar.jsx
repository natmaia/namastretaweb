import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="bg-green-pastel-dark h-79 px-8 flex justify-between items-center">
            <div className="w-1280">
                <Link href="/">
                    <img src="/public/LogoDefault.svg" alt="Logo Namastreta" />
                </Link>
            </div>
            <ul className="flex space-x-4">
                <li className="flex w-600 justify-between items-start flex-shrink-0">
                    <Link
                        href="/artista"
                        className={`${active === "artista" ? "bg-creme" : "text-green-pastel"
                            }`}
                    >
                        Artista
                    </Link>
                </li>
                <li>
                    <Link
                        href="/curador"
                        className={`${active === "curador" ? "text-slate-100" : "text-green-pastel"
                            }`}
                    >
                        Curador
                    </Link>
                </li>
                <li>
                    <Link
                        href="/obra"
                        className={`${active === "obra" ? "merino-50" : "text-green-pastel"
                            }`}
                    >
                        Obra
                    </Link>

                </li>
            </ul>
            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    );
}
