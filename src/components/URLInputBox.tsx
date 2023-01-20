import ActionButton from "@/components/ActionButton";
import {FormEvent} from "react";

export default function URLInputBox(props: {
    value: string
    onUpdate: (value: string) => void
    onSubmit: () => void
}) {
    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onSubmit()
    }

    return (
        <div className={"custom-background p-8 md:p-12 rounded-lg xl:w-2/3 mx-auto"}>
            <form onSubmit={submitForm} action="" className={"flex items-stretch flex-col md:flex-row"}>
                <input onChange={(event) => props.onUpdate(event.target.value)} value={props.value} type="text" className={"bg-gray-100 font-semibold px-6 py-4 outline-none rounded-lg flex-grow md:mr-4"} placeholder={"Shorten a link here..."}/>
                <button className={"bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-4 rounded-lg cursor-pointer mt-4 md:mt-0 text-center"}>Shorten it!</button>
            </form>
        </div>
    )
}