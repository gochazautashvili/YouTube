import { uploadImage, uploadVideo } from "@firebase/upload";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { createVideo } from "@actions/video";

const useUpload = () => {
    const [imageProgress, setImageProgress] = useState(null);
    const [videoProgress, setVideoProgress] = useState(null);
    const [image_url, setImage_url] = useState("");
    const [video_url, setVideo_url] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [disable, setDisable] = useState(true)
    const { token } = useAuth()

    useEffect(() => {
        if (image_url && video_url && title && description) {
            setDisable(false)
        } else {
            setDisable(true)
        }

    }, [image_url, video_url, title, description])

    const handleUploadVideo = (e) => {
        if (e.target.files[0].type.includes("video")) {
            uploadVideo(e.target.files[0], setVideoProgress, setVideo_url);
        } else {
            alert("only video, this is not video and can not uploaded");
        }
    };

    const handleUploadImage = (e) => {
        if (e.target.files[0].type.includes("image")) {
            uploadImage(e.target.files[0], setImageProgress, setImage_url)
        } else {
            alert("only image, this is not image and can not uploaded");
        }
    };

    const handelCreateVideo = (e) => {
        e.preventDefault()

        if (title && description && video_url && image_url && token) {
            createVideo(title, description, video_url, image_url, token).then(() => {
                window.location.reload()
            })
        }
    }

    return { imageProgress, videoProgress, handleUploadImage, handleUploadVideo, setTitle, setDescription, disable, handelCreateVideo }
}

export default useUpload
