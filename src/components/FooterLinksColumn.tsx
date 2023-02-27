import {ReactNode} from "react";

export default function FooterLinkColumn(props: {
    title: string
    children: ReactNode
}) {
    return (
        <ul className={"mb-12 sm:mb-0"}>
            <li className={"font-bold text-lg"}>{props.title}</li>

            {props.children}
        </ul>
    )
}