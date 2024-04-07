import axios from "axios";

const API = 'https://mytube-api.vercel.app/video'


export const createVideo = async (title, description, video_url, image_url, token) => {
    const video = await axios.post(API,
        { title, description, video_url, image_url },
        {
            headers: { Authorization: `Bearer ${token}` }
        })

    return video
}

export const getAllVideo = async (token) => {
    try {
        const video = await axios.get(API,
            {
                headers: { Authorization: `Bearer ${token}` }
            })

        return video
    } catch (error) {
        console.log(error);
    }
}

export const getYourVideos = async (token) => {
    try {
        const video = await axios.get(`${API}/channel`,
            {
                headers: { Authorization: `Bearer ${token}` }
            })

        return video
    } catch (error) {
        console.log(error);
    }
}

export const getSingleVideo = async (videoID, token) => {
    try {
        const video = await axios.get(`${API}/single/${videoID}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            })

        return video
    } catch (error) {
        console.log(error);
    }
}

export const subscribeAPi = async (channelID, token) => {
    try {
        const video = await axios.put(`${API}/subscribe/${channelID}`, null,
            {
                headers: { Authorization: `Bearer ${token}` }
            })

        return video
    } catch (error) {
        console.log(error);
    }
}

export const like = async (videoID, token) => {

    try {
        const video = await axios.put(`${API}/like/${videoID}`, null,
            {
                headers: { Authorization: `Bearer ${token}` }
            })

        return video
    } catch (error) {
        console.log(error);
    }
}

export const dislike = async (videoID, token) => {
    try {
        const video = await axios.put(`${API}/dislike/${videoID}`, null,
            {
                headers: { Authorization: `Bearer ${token}` }
            })

        return video
    } catch (error) {
        console.log(error);
    }
}

export const downloadVideo = async (video_url, token) => {
    try {
        const video = await axios
            .get(
                `${API}/proxy-image?imageUrl=${encodeURIComponent(video_url)}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                },
                {
                    responseType: "blob",
                }
            )

        return video
    } catch (error) {
        console.log(error);
    }
}

export const subscriptionApi = async (token) => {
    try {
        const channels = await axios.get(`${API}/subscriptions`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )

        return channels
    } catch (error) {
        console.log(error);
    }
}

export const subscriptionChannelApi = async (token) => {
    try {
        const channels = await axios.get(`${API}/subscriptionsChannels`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )


        return channels.data.subscribed
    } catch (error) {
        console.log(error);
    }
}

export const likedVideos = async (token) => {
    try {
        const videos = await axios.get(`${API}/liked`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )


        return videos
    } catch (error) {
        console.log(error);
    }
}

export const addHistory = async (videoID, token) => {
    try {
        const videos = await axios.put(`${API}/history/${videoID}`, null,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )


        return videos
    } catch (error) {
        console.log(error);
    }
}

export const getHistory = async (token) => {
    try {
        const videos = await axios.get(`${API}/yourHistory`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )


        return videos
    } catch (error) {
        console.log(error);
    }
}

export const getChannels = async (channelID, token) => {
    try {
        const videos = await axios.get(`${API}/channelsByID/${channelID}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )


        return videos
    } catch (error) {
        console.log(error);
    }
}

export const search = async (path, token) => {
    try {
        const videos = await axios.get(`${API}/search?path=${path}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )


        return videos
    } catch (error) {
        console.log(error);
    }
}

export const deleteVideo = async (videoID, token) => {
    try {
        await axios.delete(`${API}?videoID=${videoID}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
    } catch (error) {
        console.log(error);
    }
}