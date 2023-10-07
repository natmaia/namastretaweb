import Link from "next/link"

export default function Button({ children, icon, variant = "primary", element = "link", ...props }) {
    const styles = {
        primary: "inline-flex px-[20px] py-[14px] rounded justify-center items-center gap-2 rounded-lg bg-green-pastel-dark hover:bg-green",
        secundary: "inline-flex px-[20px] py-[14px]  rounded justify-center items-center gap-8 rounded-5 bg-green-pastel-light hover:bg-green",
        tertiary: "inline-flex px-[20px] py-[14px]  rounded gap-2 justify-center items-center  text-cancel border border-solid border-cancel  hover:bg-cancel hover:text-creme",
        quaternary:"inline-flex p-[14px] justify-center items-center gap-8px rounded-5px text-green-pastel-dark gap-2 m-10"

    }

    const variantClass = styles[variant]

    return (
        <>
            {element == "link" ?

                <Link href="&" {...props} className={variantClass}>
                    {/* possibilita mudar o icone na instancia */}
                    {icon}
                    {/* possibilita mudar o texto */}
                    {children}

                </Link>

            :
                <div className={variantClass}>
                    {icon}
                    <input type="submit" value={children} />
                </div>
        }

        </>
    )

}

// <div className="flex w-162 h-55 p-14 p-20 justify-center items-center gap-8 flex-shrink-0 rounded-5 border border-cancel">
//   <!-- Seu conteúdo aqui -->
// </div>
