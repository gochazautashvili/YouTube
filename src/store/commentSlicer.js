import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: []
}

const commentSlicer = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        allComments: (state, actions) => {
            state.comments = actions.payload
        },
        addComment: (state, actions) => {
            state.comments.push(actions.payload)
        },
        likeCommentState: (state, actions) => {
            state.comments.forEach(comment => {
                if (!comment.likes.includes(actions.payload.channelID)) {
                    if (comment._id == actions.payload.commentID) {
                        comment.likes.push(actions.payload.channelID)
                        comment.dislikes = comment.dislikes.filter(channelID => channelID !== actions.payload.channelID)
                    }
                } else {
                    if (comment._id == actions.payload.commentID) {
                        comment.likes = comment.likes.filter(channelID => channelID !== actions.payload.channelID)
                    }
                }
            })
        },
        dislikeCommentState: (state, actions) => {
            state.comments.forEach(comment => {
                if (!comment.dislikes.includes(actions.payload.channelID)) {
                    if (comment._id == actions.payload.commentID) {
                        comment.dislikes.push(actions.payload.channelID)
                        comment.likes = comment.likes.filter(channelID => channelID !== actions.payload.channelID)
                    }
                } else {
                    if (comment._id == actions.payload.commentID) {
                        comment.dislikes.splice(() => {
                            comment.dislikes.findIndex(like => like !== actions.payload.channelID)
                        })
                    }
                }
            })
        },
        deleteCommentState: (state, actions) => {
            state.comments = state.comments.filter((comment) => comment._id !== actions.payload)
        },
        updateCommentState: (state, actions) => {
            state.comments.forEach(comment => {
                if (comment._id === actions.payload.commentID) {
                    comment.description = actions.payload.description
                }
            })
        }
    }
})


export const { allComments, deleteCommentState, addComment, likeCommentState, dislikeCommentState, updateCommentState } = commentSlicer.actions
export default commentSlicer.reducer