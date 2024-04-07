import { likedVideos } from '@actions/video'
import { getLikedVideosState } from '@store/videoSlice'
import { useDispatch } from "react-redux"
import { useEffect } from 'react'

const useLikedVideos = (token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            likedVideos(token).then(res => {
                dispatch(getLikedVideosState(res.data))
            })
        }
    }, [token, dispatch])
}

export default useLikedVideos
