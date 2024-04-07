import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: [],
    isError: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, actions) => {
            state.user = actions.payload
            state.isError = false
        },
        register: (state, actions) => {
            state.user = actions.payload
            state.isError = false
        },
        logout: (state) => {
            state.user = null
        },
        createError: (state, actions) => {
            state.user = null
            state.isError = actions.payload
        },
        subscribe: (state, actions) => {
            state.user.newUser.subscribed.push(actions.payload)
        },
        unsubscribe: (state, actions) => {
            state.user.newUser.subscribed.splice(() => {
                state.user.newUser.subscribed.findIndex(channelID => {
                    channelID === actions.payload
                })
            })
        },
        likeVideo: (state, actions) => {
            if (state.user.newUser.liked.includes(actions.payload)) {
                state.user.newUser.liked.splice(() => {
                    state.user.newUser.liked.findIndex(videoID => {
                        videoID === actions.payload
                    })
                })
            } else {
                state.user.newUser.liked.push(actions.payload)
                state.user.newUser.disliked.splice(() => {
                    state.user.newUser.disliked.findIndex(videoID => {
                        videoID === actions.payload
                    })
                })
            }
        },
        dislikeVideo: (state, actions) => {
            if (state.user.newUser.disliked.includes(actions.payload)) {
                state.user.newUser.disliked.splice(() => {
                    state.user.newUser.disliked.findIndex(videoID => {
                        videoID === actions.payload
                    })
                })
            } else {
                state.user.newUser.liked.splice(() => {
                    state.user.newUser.liked.findIndex(videoID => {
                        videoID === actions.payload
                    })
                })
                state.user.newUser.disliked.push(actions.payload)
            }
        },
        likeComment: (state, actions) => {
            if (state.user.newUser.likedComment.includes(actions.payload.commentID)) {
                state.user.newUser.likedComment = state.user.newUser.likedComment.filter(commentID => commentID !== actions.payload.commentID)
            } else {
                state.user.newUser.likedComment.push(actions.payload.commentID)
                state.user.newUser.dislikedComment = state.user.newUser.dislikedComment.filter(commentID => commentID !== actions.payload.commentID)
            }
        },
        dislikeComment: (state, actions) => {
            if (state.user.newUser.dislikedComment.includes(actions.payload.commentID)) {
                state.user.newUser.dislikedComment = state.user.newUser.dislikedComment.filter(commentID => commentID !== actions.payload.commentID)
            } else {
                state.user.newUser.dislikedComment.push(actions.payload.commentID)
                state.user.newUser.likedComment = state.user.newUser.likedComment.filter(commentID => commentID !== actions.payload.commentID)
            }
        }
    }
})

export const { login, register, dislikeComment, likeComment, logout, createError, subscribe, unsubscribe, likeVideo, dislikeVideo } = authSlice.actions
export default authSlice.reducer