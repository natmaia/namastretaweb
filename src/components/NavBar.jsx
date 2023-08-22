import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="bg-green-pastel-dark h-20 px-8 flex justify-between items-center">
            <div className="flex">
                <Link href="/">
                    <img src="LogoDefault.svg" alt="Logo Namastreta" className="w-40 h-60" />
                </Link>
            </div>
            <ul className="flex space-x-4">
                <li className="flex w-600 justify-between items-start flex-shrink-0">
                    <Link
                        href="/artista"
                        className={`${active === "artista" ? "text-creme" : "text-green-pastel"
                            }`}
                    >
                        Artista
                    </Link>
                </li>
                <li>
                    <Link
                        href="/curador"
                        className={`${active === "curador" ? "text-creme" : "text-green-pastel"}`}
                    >
                        Curador
                    </Link>
                </li>
                <li>
                    <Link
                        href="/obra"
                        className={`${active === "obra" ? "text-creme" : "text-green-pastel"
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
