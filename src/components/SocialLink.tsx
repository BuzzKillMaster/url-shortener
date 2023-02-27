import {ReactNode} from "react";

export default function SocialLink(props: {
    children: ReactNode
}) {
    return (
        <div className={"cursor-pointer hover:text-emerald-400"}>
            {props.children}
        </div>
    )
}