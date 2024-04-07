import { subscriptionApi } from '@actions/video'
import { getSubscriptionState } from '@store/videoSlice'
import { useDispatch } from "react-redux"
import { useEffect } from 'react'

const useSubscriptions = (token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            subscriptionApi(token).then(res => {
                dispatch(getSubscriptionState(res.data))
            })
        }
    }, [token, dispatch])
}

export default useSubscriptions
