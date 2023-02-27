import React from "react";

export default function NavigationLink(props: {
    text: string
}) {
    return (
        <p className={"mr-8 cursor-pointer text-gray-600 hover:text-black font-semibold"}>{props.text}</p>
    )
}