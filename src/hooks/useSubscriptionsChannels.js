import { subscriptionChannelApi } from "@actions/video"
import { getSubscriptionChannelsState } from "@store/videoSlice"
import { useEffect } from "react"
import { useDispatch } from 'react-redux'

const useSubscriptionsChannels = (token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            subscriptionChannelApi(token).then(res => {
                dispatch(getSubscriptionChannelsState(res))
            })
        }
    }, [token, dispatch])
}

export default useSubscriptionsChannels
