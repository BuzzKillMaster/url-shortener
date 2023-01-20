import React from "react";

export default function ActionButton(props: {
    text: string
}) {
    return (
        <div className={"bg-emerald-500 py-2 px-4 cursor-pointer rounded-lg hover:bg-emerald-400 w-max"}>
            <p className={"font-bold text-white"}>{props.text}</p>
        </div>
    )
}