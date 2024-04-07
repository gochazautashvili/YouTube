import axios from "axios";

const API = 'https://mytube-api.vercel.app/comment'

export const commentsApi = async (videoID, token) => {
    try {
        const comments = await axios.get(`${API}/?videoID=${videoID}`, {
            headers: { Authorization: `Bearer ${token}` }
        })

        return comments?.data
    } catch (error) {
        console.log(error);
    }
}

export const commentApi = async (videoID, description, token) => {
    try {
        const comments = await axios.post(`${API}`, { videoID, description }, {
            headers: { Authorization: `Bearer ${token}` }
        })

        return comments?.data
    } catch (error) {
        console.log(error);
    }
}

export const likeCommentApi = async (commentID, token) => {
    try {
        await axios.put(`${API}/like/?commentID=${commentID}`, null, {
            headers: { Authorization: `Bearer ${token}` }
        })
    } catch (error) {
        console.log(error);
    }
}

export const dislikeCommentApi = async (commentID, token) => {
    try {
        await axios.put(`${API}/dislike/?commentID=${commentID}`, null, {
            headers: { Authorization: `Bearer ${token}` }
        })
    } catch (error) {
        console.log(error);
    }
}


export const deleteCommentApi = async (commentID, token) => {
    try {
        await axios.delete(`${API}/?commentID=${commentID}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
    } catch (error) {
        console.log(error);
    }
}


export const updateCommentApi = async (commentID, description, token) => {
    try {
        await axios.put(`${API}/?commentID=${commentID}`, { description }, {
            headers: { Authorization: `Bearer ${token}` }
        })
    } catch (error) {
        console.log(error);
    }
}