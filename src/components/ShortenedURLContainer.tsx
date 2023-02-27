import ActionButton from "@/components/ActionButton";
import {BsFillTrashFill} from "react-icons/bs";
import React from "react";

export default function ShortenedURLContainer(props: {
    shortLink: string
    originalLink: string
    onDelete: () => void
}) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.shortLink)
        alert("The link has been copied to your clipboard!")
    }

    return (
        <div className={"pb-4"}>
            <div className={"bg-gray-50 p-6 rounded-lg flex items-center"}>
                <div className={"flex-grow md:flex justify-between items-center"}>
                    <h3 className={"font-medium"}>{props.originalLink}</h3>
                    <a href={"https://" + props.shortLink} target={"_blank"} rel={"noreferrer"}
                       className={"font-medium md:ml-6 text-emerald-500 hover:text-emerald-400 cursor-pointer"}>{props.shortLink}</a>
                </div>

                <div className={"flex ml-6 items-center"}>
                    <div onClick={copyToClipboard}>
                        <ActionButton text={"Copy"}/>
                    </div>
                    <div onClick={props.onDelete} className={"ml-6 cursor-pointer hover:text-red-500"}>
                        <BsFillTrashFill/>
                    </div>
                </div>
            </div>
        </div>
    )
}