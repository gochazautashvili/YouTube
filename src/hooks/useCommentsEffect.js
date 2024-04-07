import { commentsApi } from "@actions/comment"
import { allComments } from "@store/commentSlicer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useCommentsEffect = (videoID, token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            commentsApi(videoID, token).then(res => {
                dispatch(allComments(res))
            })
        }
    }, [videoID, token, dispatch])
}

export default useCommentsEffect
