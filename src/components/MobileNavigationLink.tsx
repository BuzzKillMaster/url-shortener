import {motion} from "framer-motion";
import React from "react";

const variants = {
    closed: {
        opacity: 0
    },
    open: {opacity: 1}
}

export default function MobileNavigationLink(props: {
    text: string
}) {
    return (
        <motion.p variants={variants}
                  className={"mb-8 cursor-pointer text-gray-50 hover:text-emerald-400 font-semibold"}>{props.text}</motion.p>
    )
}