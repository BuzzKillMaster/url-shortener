import ActionButton from "@/components/ActionButton";
import {motion} from "framer-motion";

export default function CallToAction() {
    return (
        <motion.section layout className={"custom-background px-4 py-20"}>
            <div className={"container mx-auto text-center"}>
                <h2 className={"text-4xl text-white font-bold mb-8"}>Boost your links today</h2>

                <div className={"w-max mx-auto"}>
                    <ActionButton text={"Get Started"}/>
                </div>
            </div>
        </motion.section>
    )
}