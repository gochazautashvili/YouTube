"use client";
import CategoryVideo from "@components/CategoryVideo";
import Comments from "@components/Comments";
import Video from "@components/Video";
import useAuth from "@hooks/useAuth";
import useCommentsEffect from "@hooks/useCommentsEffect";
import useHistory from "@hooks/useHistory";
import useSingleVideo from "@hooks/useSingleVideo";
import useVideosEffect from "@hooks/useVideosEffect";
import { useSearchParams } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import useComment from "@hooks/useComment";

const VideoPage = ({ params }) => {
  const searchParams = useSearchParams();
  const searchPath = searchParams.get("search-videos");
  const [comment, setComment] = useState(false);
  const { token } = useAuth();
  const { comments } = useComment();

  useCommentsEffect(params.videoID, token);
  useSingleVideo(params.videoID, token);
  useHistory(params.videoID, token);
  useVideosEffect(searchPath, token);

  return (
    <main className="mt-20 lg:mt-24 w-full max-w-screen-2xl mx-auto lg:flex gap-x-5 flex-[1]">
      <div className="flex-[1]">
        <Video />
        <div className="hidden lg:flex w-full">
          <Comments videoID={params.videoID} />
        </div>
        <div
          className="lg:hidden w-full py-4 mb-3 bg-slate-300 rounded-lg cursor-pointer"
          onClick={() => setComment(true)}
        >
          <h1 className="text-center text-2xl font-bold">
            Comments {comments?.length}
          </h1>
        </div>
        {comment && (
          <div className="lg:hidden fixed rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[800px] h-[500px] w-full p-5 bg-slate-400 overflow-auto">
            <IoClose
              onClick={() => setComment(false)}
              className="cursor-pointer"
              size={30}
            />
            <Comments videoID={params.videoID} />
          </div>
        )}
      </div>
      <CategoryVideo />
    </main>
  );
};

export default VideoPage;
