import { getHistory } from "@actions/video"
import { getHistoryState } from "@store/videoSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useYourHistory = (token) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            getHistory(token).then(res => {
                dispatch(getHistoryState(res.data))
            })
        }
    }, [token, dispatch])
}

export default useYourHistory
