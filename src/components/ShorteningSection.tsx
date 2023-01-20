import React, {useEffect, useState} from "react";
import URLInputBox from "@/components/URLInputBox";
import ActionButton from "@/components/ActionButton";
import {BsFillTrashFill} from "react-icons/bs";
import {AnimatePresence, motion} from "framer-motion";
import * as url from "url";

type UrlData = {
    id: string
    original: string
    short: string
}

const itemVariants = {
    hidden: {
        opacity: 0
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: {
            delay: custom
        }
    })
}

export default function ShorteningSection() {
    const [inputValue, setInputValue] = useState("")
    const [urlList, setUrlList] = useState<UrlData[]>([])
    const baseURL = "https://api.shrtco.de/v2/shorten?url="

    useEffect(() => {
        console.log('effect in... effect?')

        const storedUrls = localStorage.getItem("url_list")

        if (storedUrls !== null) {
            setUrlList(JSON.parse(storedUrls))
        }
    }, [])

    const shortenURL = async () => {
        if (inputValue.trim().length === 0) {
            alert("You have to enter a link for us to shorten.")
            return
        }

        try {
            const response = await fetch(baseURL + inputValue)
            const data = await response.json()

            if (!data.ok) throw Error()

            const newURLList = [{
                id: data.result.code,
                original: data.result.original_link,
                short: data.result.short_link
            }, ...urlList]

            setInputValue("")
            setUrlList(newURLList)

            localStorage.setItem("url_list", JSON.stringify(newURLList))
        } catch (e) {
            alert("Uh-oh, looks like something went wrong. Please try again.")
        }
    }

    const deleteUrl = (urlID: string) => {
        const newURLList = urlList.filter(item => item.id !== urlID)
        setUrlList(newURLList)
        localStorage.setItem("url_list", JSON.stringify(newURLList))
    }

    return (
        <>
            <div className={"relative"}>
                <section className={"px-4 py-8"}>
                    <div className={"container mx-auto relative z-10"}>
                        <URLInputBox value={inputValue} onUpdate={setInputValue} onSubmit={shortenURL}/>
                    </div>
                </section>
                <div className={"bg-gray-50 h-1/2 w-full absolute top-0"}></div>
            </div>

            <motion.section layout className={"bg-gray-200 px-4 "}>
                <div className={"container mx-auto"}>
                    <ul className={"xl:w-2/3 mx-auto"}>
                        <AnimatePresence>
                            {urlList.map((url, index) => (
                                <motion.div key={url.id}
                                            layoutId={url.id}
                                            variants={itemVariants}
                                            initial={"hidden"}
                                            animate={"visible"}
                                            custom={(index + 1) * 0.2}
                                            exit={"hidden"}
                                >
                                    <ShortenedURL shortLink={url.short} originalLink={url.original}
                                                  onDelete={() => deleteUrl(url.id)}/>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </ul>
                </div>
            </motion.section>
        </>
    )
}

function ShortenedURL(props: {
    shortLink: string
    originalLink: string
    onDelete: () => void
}) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.shortLink)
        alert("The link has been copied to your clipboard!")
    }

    return (
        <div className={"pb-4"}>
            <div className={"bg-gray-50 p-6 rounded-lg flex items-center"}>
                <div className={"flex-grow md:flex justify-between items-center"}>
                    <h3 className={"font-medium"}>{props.originalLink}</h3>
                    <a href={"https://" + props.shortLink} target={"_blank"} rel={"noreferrer"}
                       className={"font-medium md:ml-6 text-emerald-500 hover:text-emerald-400 cursor-pointer"}>{props.shortLink}</a>
                </div>

                <div className={"flex ml-6 items-center"}>
                    <div onClick={copyToClipboard}>
                        <ActionButton text={"Copy"}/>
                    </div>
                    <div onClick={props.onDelete} className={"ml-6 cursor-pointer hover:text-red-500"}>
                        <BsFillTrashFill/>
                    </div>
                </div>
            </div>
        </div>
    )
}