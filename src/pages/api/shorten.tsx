import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    original: string
    short: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const data = req.body
        const { url } = data

        const response = await fetch("https://cleanuri.com/api/v1/shorten", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: ensureHttps(url) })
        })

        const shortenedData = await response.json()

        console.log(shortenedData)

        if (!url || shortenedData.error) {
            return res.status(400).end()
        }

        return res.status(200).json({
            original: ensureHttps(url),
            short: shortenedData.result_url
        })
    } else {
        res.status(405).end()
    }
}

const ensureHttps = (url: string) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return `https://${url}`
    }

    return url
}



