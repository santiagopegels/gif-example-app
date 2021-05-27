import { getGifs } from "../helpers/getGifs"
import { useState, useEffect } from "react"

export const useFetchGif = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })


    useEffect(() => {
        getGifs(category).then(imgs => {
            setTimeout(() => {

                setState({
                    data: imgs,
                    loading: false
                })
            }, 2000)

        })
    }, [category])



    return state
}
