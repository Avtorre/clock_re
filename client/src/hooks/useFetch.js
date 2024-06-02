import { useEffect, useState } from "react"
import axios from "axios"


export const useFetch = (url, page, deps) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setData(null)
        setError('')
        setIsLoading(true)
        axios
            .get(url, {params: {_page: page}})
            .then(resp => setData(resp))
            .catch(e => setError(e.message))
            .finally(setIsLoading(false))
    },
    // eslint-disable-next-line 
    [url, deps])

    return [data, isLoading, error]
}