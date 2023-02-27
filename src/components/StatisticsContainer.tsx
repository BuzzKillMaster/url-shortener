import React, {ReactNode} from "react";

export default function StatisticsContainer(props: {
    title: string
    content: string
    icon: ReactNode
}) {
    return (
        <div className={"bg-gray-50 rounded-lg p-8 pt-16 relative"}>
            <div className={"bg-slate-800 rounded-full w-max text-emerald-300 p-6 text-4xl absolute top-0 -translate-y-1/2"}>{props.icon}</div>
            <h3 className={"text-xl font-bold mb-4"}>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}