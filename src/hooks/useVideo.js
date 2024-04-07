import { addHistory, deleteVideo, dislike, downloadVideo, getAllVideo, getChannels, getHistory, getSingleVideo, getYourVideos, like, likedVideos, search, subscriptionApi, subscriptionChannelApi } from "@actions/video"
import { deleteYourVideoByID, dislikeLength, getAllVideoState, getChannelsState, getHistoryState, getLikedVideosState, getSingleVideoState, getSubscriptionChannelsState, getSubscriptionState, getYourVideoState, likeLength } from "@store/videoSlice"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect, useState } from "react";
import useAuth from "./useAuth"
import { dislikeVideo, likeVideo } from "@store/authSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useVideo = () => {
    const dispatch = useDispatch()
    const { videos, YourVideo, singleVideo, channels, historyState, subscribeValue, subscription, subscriptionChannels, likedVideo } = useSelector(state => state.video)
    const { token } = useAuth()
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchPath = searchParams.get("search-videos")


    const getVideos = () => {
        useEffect(() => {
            const fetchVideos = async () => {
                if (token) {
                    try {
                        const res = await getAllVideo(token)

                        dispatch(getAllVideoState(res.data))
                    } catch (error) {
                        console.log(error);
                    }
                }
            }

            if (token && searchPath) {
                search(searchPath, token).then(res => {
                    dispatch(getAllVideoState(res.data))
                })
            } else {
                fetchVideos()
            }

        }, [searchPath, token])
    }

    const getYourVideosById = () => {
        useEffect(() => {
            const fetchVideos = async () => {
                if (token) {
                    try {
                        const res = await getYourVideos(token)

                        dispatch(getYourVideoState(res.data))
                    } catch (error) {
                        console.log(error);
                    }
                }
            }

            fetchVideos()
        }, [token])
    }

    const getSingleVideosById = async (videoID) => {
        useEffect(() => {
            const fetchVideos = async () => {
                if (token) {
                    try {
                        const res = await getSingleVideo(videoID, token)

                        dispatch(getSingleVideoState(res.data))
                    } catch (error) {
                        console.log(error);
                    }
                }
            }

            fetchVideos()
        }, [token])
    }

    const handleLike = async (videoID) => {
        await like(videoID, token)

        dispatch(likeVideo(videoID))
        dispatch(likeLength(videoID))
    }

    const handleDislike = async (videoID) => {
        await dislike(videoID, token)

        dispatch(dislikeVideo(videoID))
        dispatch(dislikeLength(videoID))
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

    const getSubscriptions = () => {
        useEffect(() => {
            if (token) {
                subscriptionApi(token).then(res => {
                    dispatch(getSubscriptionState(res.data))
                })
            }

        }, [token])
    }

    const getSubscriptionsChannels = () => {
        useEffect(() => {
            if (token) {
                subscriptionChannelApi(token).then(res => {
                    dispatch(getSubscriptionChannelsState(res))
                })
            }
        }, [token])
    }

    const getLikedVideos = () => {
        useEffect(() => {
            if (token) {
                likedVideos(token).then(res => {
                    dispatch(getLikedVideosState(res.data))
                })
            }
        }, [token])
    }

    const history = (videoID) => {
        useEffect(() => {
            if (token) {
                addHistory(videoID, token)
            }
        }, [token])
    }

    const yourHistory = () => {
        useEffect(() => {
            if (token) {
                getHistory(token).then(res => {
                    dispatch(getHistoryState(res.data))
                })
            }
        }, [token])
    }

    const getChannelById = (channelID) => {
        useEffect(() => {
            if (token) {
                getChannels(channelID, token).then(res => {
                    dispatch(getChannelsState(res.data))
                })
            }
        }, [token])
    }

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
        history,
        channels,
        getVideos,
        YourVideo,
        likedVideo,
        handleLike,
        handleShare,
        yourHistory,
        singleVideo,
        subscription,
        searchVideos,
        historyState,
        handleDislike,
        subscribeValue,
        getChannelById,
        getLikedVideos,
        handleDownload,
        deleteVideoByID,
        getSubscriptions,
        getYourVideosById,
        getSingleVideosById,
        subscriptionChannels,
        getSubscriptionsChannels
    }
}

export default useVideo
