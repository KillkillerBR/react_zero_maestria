import { useState, useEffect } from "react"

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setcallFetch] = useState(false)

    // 6 - loading
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(() => {

        const fetchData = async () => {

            // 6 - loading
            setLoading(true)

            try {
                const res = await fetch(url)

                const json = await res.json()

                setData(json)
            } catch (error) {
                setError("houve algum erro ao carregar os dados!")
            }

            setLoading(false)

        }

        fetchData()
    }, [url, callFetch])

    // 5 - refatorando post
    useEffect(() => {
        const httRequest = async () => {
            if (method === "POST") {

                let fetchOtions = [url, config]

                const res = await fetch(...fetchOtions)

                const json = await res.json()

                setcallFetch(json)
            }
        }

        httRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}