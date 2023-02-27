import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>URL Shortener</title>
                <meta name="description"
                      content="The quickest and simplest way for you to shorten your links down to a reasonable size - try it now and be amazed at the results."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Component {...pageProps} />
        </>
    )
}
