import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    videos: null,
    channel: null,
    YourVideo: null,
    singleVideo: null,
    subscription: null,
    subscriptionChannels: null,
    likedVideo: null,
    historyState: null,
    channels: null,
    isError: false,
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        getAllVideoState: (state, actions) => {
            state.videos = actions.payload
        },
        getChannel: (state, actions) => {
            state.channel = actions.payload
        },
        getYourVideoState: (state, actions) => {
            state.YourVideo = actions.payload
        },
        getSingleVideoState: (state, actions) => {
            state.singleVideo = actions.payload
        },
        getSubscriptionState: (state, actions) => {
            state.subscription = actions.payload
        },
        getSubscriptionChannelsState: (state, actions) => {
            state.subscriptionChannels = actions.payload
        },
        getLikedVideosState: (state, actions) => {
            state.likedVideo = actions.payload
        },
        getHistoryState: (state, actions) => {
            state.historyState = actions.payload
        },
        getChannelsState: (state, actions) => {
            state.channels = actions.payload
        },
        subscribeLength: (state, actions) => {
            state.singleVideo.channelID.subscribers.push(actions.payload)
        },
        unsubscribeLength: (state, actions) => {
            state.singleVideo.channelID.subscribers = state.singleVideo.channelID.subscribers.filter(videoID => videoID !== actions.payload)
        },
        likeLength: (state, actions) => {
            if (state.singleVideo.likes.includes(actions.payload)) {
                state.singleVideo.likes = state.singleVideo.likes.filter(videoID => videoID !== actions.payload)
            } else {
                state.singleVideo.likes.push(actions.payload)
            }
        },
        dislikeLength: (state, actions) => {
            state.singleVideo.likes = state.singleVideo.likes.filter(videoID => videoID !== actions.payload)
        },
        deleteYourVideoByID: (state, actions) => {
            state.YourVideo = state.YourVideo.filter(videoID => videoID._id !== actions.payload)
        }
    }
})

export const { getAllVideoState, subscribeLength, deleteYourVideoByID, dislikeLength, likeLength, unsubscribeLength, getChannelsState, getHistoryState, getChannel, getLikedVideosState, getSubscriptionChannelsState, getYourVideoState, getSingleVideoState, subscribeChannelState, getSubscriptionState } = videoSlice.actions
export default videoSlice.reducer