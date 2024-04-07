import { getAllVideo, search } from "@actions/video"
import { getAllVideoState } from "@store/videoSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useVideosEffect = (searchPath, token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token && searchPath) {
            search(searchPath, token).then(res => {
                dispatch(getAllVideoState(res.data))
            })
        } else {
            if (token) {
                getAllVideo(token).then(res => {
                    dispatch(getAllVideoState(res.data))
                })
            }
        }

    }, [searchPath, token, dispatch])
}

export default useVideosEffect

