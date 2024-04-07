import { getChannels } from "@actions/video"
import { getChannelsState } from "@store/videoSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


const useChannel = (channelID, token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            getChannels(channelID, token).then(res => {
                dispatch(getChannelsState(res.data))
            })
        }
    }, [token, dispatch, channelID])
}

export default useChannel
