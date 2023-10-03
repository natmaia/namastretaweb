import Link from "next/link";
import DropMenu from "./dropMenu";

export default function NavBar({ active }) {
    return (
        <nav className="bg-green-pastel-dark h-20 px-8 flex justify-between items-center">
            <div className="flex">
                <Link href="/">
                    <img src="LogoDefault.svg" alt="Logo Namastreta" className="w-40 h-60" />
                </Link>
            </div>
            <ul className="flex space-x-40">
                <li className="flex w-600 justify-between items-start flex-shrink-0">
                    <Link
                        href="/categorias"
                        className={`${active === "categorias" ? "text-creme" : "text-green-pastel"}`}
                    >
                        Categorias
                    </Link>
                </li>
                <li className="flex w-600 justify-between items-start flex-shrink-0">
                    <Link
                        href="/artistas"
                        className={`${active === "artistas" ? "text-creme" : "text-green-pastel"
                            }`}
                    >
                        Artistas
                    </Link>
                </li>
                <li className="flex w-600 justify-between items-start flex-shrink-0">
                    <Link
                        href="/curadores"
                        className={`${active === "curadores" ? "text-creme" : "text-green-pastel"}`}
                    >
                        Curadores
                    </Link>
                </li>
                <li className="flex w-600 justify-between items-start flex-shrink-0">
                    <Link
                        href="/obra"
                        className={`${active === "obra" ? "text-creme" : "text-green-pastel"
                            }`}
                    >
                        Obras
                    </Link>

                </li>

                {/* <li className="flex w-600 justify-between items-start flex-shrink-0">
                    <Link
                        href="/register"
                        className={`${active === "register" ? "text-creme" : "text-green-pastel"
                            }`}
                    >
                        Registro
                    </Link>

                </li> */}

                <li className="flex w-600 justify-between items-start flex-shrink-0">
                    <Link
                        href="/login"
                        className={`${active === "login" ? "text-creme" : "text-green-pastel"
                            }`}
                    >
                        Login
                    </Link>

                </li>
            </ul>
            <DropMenu />

        </nav>
    );
}
