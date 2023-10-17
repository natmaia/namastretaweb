
export default function TextInput({ label, id, variante = "default", name, register = () => { }, ...props }) {
    return (
        <div className="flex flex-col gap-1 my-2 ">
            <label className="text-green font-semibold " htmlFor={id}>{label}</label>
            <input {...register(name)} type="text" id={id} {...props} />
        </div>


    )
}