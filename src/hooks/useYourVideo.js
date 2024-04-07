import { getYourVideos } from "@actions/video"
import { getYourVideoState } from "@store/videoSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


const useYourVideo = (token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            getYourVideos(token).then(res => {
                dispatch(getYourVideoState(res.data))
            }).catch(err => {
                console.log(err);
            })
        }
    }, [token, dispatch])
}

export default useYourVideo
