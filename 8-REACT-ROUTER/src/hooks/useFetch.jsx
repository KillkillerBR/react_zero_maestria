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


    // 7 - tratando erros
    const [error, setError] = useState(null)

    // 8 - desafio delete
    const [itemID, setItemID] = useState(null)

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
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "aplication/json"
                },
            })

            setMethod(method)
            setItemID(data)
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
            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemID}`

                console.log(deleteUrl)

                const res = await fetch(deleteUrl, config)

                const json = await res.json()

                setcallFetch(null)
            }
        }

        httRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}