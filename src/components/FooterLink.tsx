export default function FooterLink(props: {
    text: string
}) {
    return (
        <li className={"mt-4"}>
            <p className={"hover:text-emerald-500 cursor-pointer font-medium inline-block"}>{props.text}</p>
        </li>
    )
}