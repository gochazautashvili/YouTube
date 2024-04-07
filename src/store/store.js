import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import videoSlice from './videoSlice'
import commentSlicer from './commentSlicer'

const store = configureStore({
    reducer: {
        auth: authSlice,
        video: videoSlice,
        comment: commentSlicer
    }
})

export default store