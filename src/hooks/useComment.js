import { commentApi, commentsApi, deleteCommentApi, dislikeCommentApi, likeCommentApi, updateCommentApi } from "@actions/comment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useAuth from "./useAuth"
import { addComment, allComments, deleteCommentState, dislikeCommentState, likeCommentState, updateCommentState } from "@store/commentSlicer"
import { dislikeComment, likeComment } from "@store/authSlice"

const useComment = () => {
    const dispatch = useDispatch()
    const { comments } = useSelector(state => state.comment)
    const { token } = useAuth()
    const { newUser } = useAuth()

    const getComments = (videoID) => {
        useEffect(() => {
            if (token) {
                commentsApi(videoID, token).then(res => {
                    dispatch(allComments(res))
                })
            }
        }, [token])
    }

    const createComment = (videoID, description) => {
        commentApi(videoID, description, token).then(res => {
            dispatch(addComment(res))
        })
    }

    const likeVideo = (commentID, channelID) => {
        likeCommentApi(commentID, token).then(() => {
            dispatch(likeCommentState({ commentID, channelID }))
            dispatch(likeComment({ commentID, channelID }))
        })
    }

    const dislikeVideo = (commentID, channelID) => {
        dislikeCommentApi(commentID, token).then(() => {
            dispatch(dislikeCommentState({ commentID, channelID }))
            dispatch(dislikeComment({ commentID, channelID }))
        })
    }

    const deleteComment = (commentID) => {
        deleteCommentApi(commentID, token).then(() => {
            dispatch(deleteCommentState(commentID))
        })
    }

    const handleUpdate = (commentID, description) => {
        updateCommentApi(commentID, description, token).then(() => {
            dispatch(updateCommentState({ commentID, description }))
        })
    }

    return { getComments, handleUpdate, deleteComment, createComment, comments, likeVideo, dislikeVideo }
}

export default useComment
