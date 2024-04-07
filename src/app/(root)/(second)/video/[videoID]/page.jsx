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

const VideoPage = ({ params }) => {
  const searchParams = useSearchParams();
  const searchPath = searchParams.get("search-videos");
  const { token } = useAuth();

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
      </div>
      <CategoryVideo />
    </main>
  );
};

export default VideoPage;
