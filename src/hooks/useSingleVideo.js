import { getSingleVideo } from "@actions/video";
import { getSingleVideoState } from "@store/videoSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux"

const useSingleVideo = (videoID, token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            getSingleVideo(videoID, token).then(res => {
                dispatch(getSingleVideoState(res.data))
            }).catch(error => {
                console.log(error);
            })
        }
    }, [videoID, token, dispatch])
}

export default useSingleVideo
