import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import {motion} from "framer-motion";

export default function PageFooter() {
    return (
        <motion.section layout className={"px-4 py-16 bg-slate-800 text-white"}>
            <div className={"container mx-auto grid lg:grid-cols-4 gap-8 items-start"}>
                <h2 className={"text-4xl font-bold mb-6 sm:mb-0"}>Shortly</h2>

                <div className={"col-span-2 grid sm:grid-cols-3"}>
                    <ul className={"mb-12 sm:mb-0"}>
                        <li className={"font-bold text-lg"}>Features</li>

                        <FooterLink text={"Link Shortening"}/>
                        <FooterLink text={"Branded Links"}/>
                        <FooterLink text={"Analytics"}/>
                    </ul>

                    <ul className={"mb-12 sm:mb-0"}>
                        <li className={"font-bold text-lg"}>Resources</li>

                        <FooterLink text={"Blog"}/>
                        <FooterLink text={"Developers"}/>
                        <FooterLink text={"Support"}/>
                    </ul>

                    <ul className={"mb-12 sm:mb-0"}>
                        <li className={"font-bold text-lg"}>Company</li>

                        <FooterLink text={"About"}/>
                        <FooterLink text={"Our Team"}/>
                        <FooterLink text={"Careers"}/>
                        <FooterLink text={"Contact"}/>
                    </ul>
                </div>

                <div className={"flex items-center gap-4 text-3xl"}>
                    <div className={"cursor-pointer hover:text-emerald-400"}>
                        <AiFillFacebook/>
                    </div>
                    <div className={"cursor-pointer hover:text-emerald-400"}>
                        <AiFillTwitterSquare/>
                    </div>
                    <div className={"cursor-pointer hover:text-emerald-400"}>
                        <AiFillLinkedin/>
                    </div>
                    <div className={"cursor-pointer hover:text-emerald-400"}>
                        <AiFillInstagram/>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

function FooterLink(props: {
    text: string
}) {
    return (
        <li className={"mt-4"}>
            <p className={"hover:text-emerald-500 cursor-pointer font-medium inline-block"}>{props.text}</p>
        </li>
    )
}