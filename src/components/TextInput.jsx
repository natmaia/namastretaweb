
export default function TextInput({label, id, ...props}) {
    return (
        <div className="flex flex-col gap-1 my-2 ">
            <label className="text-green font-semibold " htmlFor={id}>{label}</label>
            <input type="text" {...props} id={id} className="rounded p-2 outline-none focus:ring-creme"/>

        </div>


    )
}