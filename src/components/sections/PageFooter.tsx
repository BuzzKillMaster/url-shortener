import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import {motion} from "framer-motion";
import FooterLink from "@/components/FooterLink";
import FooterLinkColumn from "@/components/FooterLinksColumn";
import SocialLink from "@/components/SocialLink";

export default function PageFooter() {
    return (
        <motion.section layout className={"px-4 py-16 bg-slate-800 text-white"}>
            <div className={"container mx-auto grid lg:grid-cols-4 gap-8 items-start"}>
                <h2 className={"text-4xl font-bold mb-6 sm:mb-0"}>Shortly</h2>

                <div className={"col-span-2 grid sm:grid-cols-3"}>
                    <FooterLinkColumn title={"Features"}>
                        <FooterLink text={"Link Shortening"}/>
                        <FooterLink text={"Branded Links"}/>
                        <FooterLink text={"Analytics"}/>
                    </FooterLinkColumn>

                    <FooterLinkColumn title={"Resources"}>
                        <FooterLink text={"Blog"}/>
                        <FooterLink text={"Developers"}/>
                        <FooterLink text={"Support"}/>
                    </FooterLinkColumn>

                    <FooterLinkColumn title={"Company"}>
                        <FooterLink text={"About"}/>
                        <FooterLink text={"Our Team"}/>
                        <FooterLink text={"Careers"}/>
                        <FooterLink text={"Contact"}/>
                    </FooterLinkColumn>
                </div>

                <div className={"flex items-center gap-4 text-3xl"}>
                    <SocialLink>
                        <AiFillFacebook/>
                    </SocialLink>

                    <SocialLink>
                        <AiFillTwitterSquare/>
                    </SocialLink>

                    <SocialLink>
                        <AiFillLinkedin/>
                    </SocialLink>

                    <SocialLink>
                        <AiFillInstagram/>
                    </SocialLink>
                </div>
            </div>
        </motion.section>
    )
}