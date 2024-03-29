import React, {useEffect, useState} from "react";
import URLInputBox from "@/components/URLInputBox";
import {AnimatePresence, motion} from "framer-motion";
import ShortenedURLContainer from "@/components/ShortenedURLContainer";
import URLData from "@/types/URLData";

const variants = {
    hidden: {
        opacity: 0
    },
    visible: (delay: number) => ({
        opacity: 1,
        transition: {
            delay: delay
        }
    })
}

export default function ShorteningSection() {
    const [inputValue, setInputValue] = useState("")
    const [urlList, setUrlList] = useState<URLData[]>([])

    useEffect(() => {
        const storedUrls = localStorage.getItem("url_list")

        if (storedUrls !== null) {
            setUrlList(JSON.parse(storedUrls))
        }
    }, [])

    const shortenURL = async () => {
        const url = inputValue.trim()

        if (url.length === 0) {
            alert("You have to enter a link for us to shorten.")
            return
        }

        try {
            const response = await fetch("/api/shorten", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({url})
            })

            const data = await response.json()

            const newURLList = [{
                original: data.original,
                short: data.short
            }, ...urlList]

            setInputValue("")
            setUrlList(newURLList)

            localStorage.setItem("url_list", JSON.stringify(newURLList))
        } catch (e) {
            alert("Uh-oh, looks like something went wrong. Please try again.")
        }
    }

    const deleteUrl = (urlID: string) => {
        const newURLList = urlList.filter(item => item.short !== urlID)
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
                                <motion.div key={url.short}
                                            layoutId={url.short}
                                            variants={variants}
                                            initial={"hidden"}
                                            animate={"visible"}
                                            custom={(index + 1) * 0.2}
                                            exit={"hidden"}
                                >
                                    <ShortenedURLContainer shortLink={url.short} originalLink={url.original}
                                                  onDelete={() => deleteUrl(url.short)}/>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </ul>
                </div>
            </motion.section>
        </>
    )
}