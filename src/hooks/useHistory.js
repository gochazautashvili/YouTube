import { addHistory } from "@actions/video"
import { useEffect } from "react"

const useHistory = (videoID, token) => {
    useEffect(() => {
        if (token) {
            addHistory(videoID, token)
        }
    }, [videoID, token])
}

export default useHistory
