import {AnimatePresence, motion} from "framer-motion";
import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: {opacity: 1}
};

export default function MobileMenu(props: {
    closeMobileMenu: () => void
    isOpen: boolean
}) {
    return (
        <AnimatePresence>
            {props.isOpen &&
                <motion.aside
                    initial={{width: 0}}
                    animate={{width: "100vw"}}
                    exit={{
                        width: 0,
                        transition: {delay: 1, duration: 0.3}
                    }}>
                    <motion.div className={"h-screen bg-slate-900 w-full p-8"}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={sideVariants}>
                        <AiOutlineClose onClick={props.closeMobileMenu}
                                        className={"text-xl text-white mb-8 ml-auto cursor-pointer hover:text-emerald-400"}/>
                        <MobileNavigationLink text={"Features"}/>
                        <MobileNavigationLink text={"Pricing"}/>
                        <MobileNavigationLink text={"Resources"}/>
                        <MobileNavigationLink text={"Login"}/>
                        <MobileNavigationLink text={"Sign up"}/>
                    </motion.div>
                </motion.aside>}
        </AnimatePresence>
    )
}

function MobileNavigationLink(props: {
    text: string
}) {
    return (
        <motion.p variants={itemVariants}
            className={"mb-8 cursor-pointer text-gray-50 hover:text-emerald-400 font-semibold"}>{props.text}</motion.p>
    )
}