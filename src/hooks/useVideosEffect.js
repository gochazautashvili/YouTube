import { getAllVideo, search } from "@actions/video"
import { getAllVideoState } from "@store/videoSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useVideosEffect = (searchPath, token) => {
    const dispatch = useDispatch()

    const fetchVideos = async () => {
        if (token) {
            try {
                const res = await getAllVideo(token)

                dispatch(getAllVideoState(res.data))
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        if (token && searchPath) {
            search(searchPath, token).then(res => {
                dispatch(getAllVideoState(res.data))
            })
        } else {
            fetchVideos()
        }

    }, [searchPath, token, dispatch])
}

export default useVideosEffect

