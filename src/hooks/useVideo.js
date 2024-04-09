import { deleteVideo, dislike, downloadVideo, like, } from "@actions/video"
import { deleteYourVideoByID, dislikeLength, likeLength } from "@store/videoSlice"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useState } from "react";
import { dislikeVideo, likeVideo } from "@store/authSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useAuth from "./useAuth"

const useVideo = () => {
    const dispatch = useDispatch()
    const { videos, YourVideo, singleVideo, channels, historyState, subscribeValue, subscription, subscriptionChannels, likedVideo } = useSelector(state => state.video)
    const { token, newUser } = useAuth()
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleLike = async (videoID) => {
        await like(videoID, token)

        dispatch(likeVideo(videoID))
        dispatch(likeLength(newUser?._id))
    }

    const handleDislike = async (videoID) => {
        await dislike(videoID, token)

        dispatch(dislikeVideo(videoID))
        dispatch(dislikeLength(newUser?._id))
    }

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: "Title of the shared content",
                    text: "Description of the shared content",
                    url: "URL of the shared content",
                });
            } else {
                throw new Error("Web Share API is not supported.");
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    const handleDownload = async (video_url) => {
        setLoading(true)
        downloadVideo(video_url, token).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "downloaded_video.mp4");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            setLoading(false)
        }).catch((error) => {
            console.error("Error downloading video:", error);
            setLoading(false)
        });
    };

    const searchVideos = (e) => {
        e.preventDefault();
        if (e.target[0].value.trim() !== "" || e.target[2].value.trim() !== "") {
            const path = e.target[0].value.trim() || e.target[2].value.trim()
            router.push(pathname + "?" + createQueryString("search-videos", path));
        } else {
            router.push(pathname);
        }
    };

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    )

    const deleteVideoByID = (videoID) => {
        deleteVideo(videoID, token).then(() => {
            dispatch(deleteYourVideoByID(videoID))
        })
    }

    return {
        videos,
        loading,
        channels,
        YourVideo,
        likedVideo,
        handleLike,
        handleShare,
        singleVideo,
        subscription,
        searchVideos,
        historyState,
        handleDislike,
        subscribeValue,
        handleDownload,
        deleteVideoByID,
        subscriptionChannels,
    }
}

export default useVideo
