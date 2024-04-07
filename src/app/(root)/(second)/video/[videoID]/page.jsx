"use client";
import CategoryVideo from "@components/CategoryVideo";
import Comments from "@components/Comments";
import Video from "@components/Video";
import useComment from "@hooks/useComment";
import useVideo from "@hooks/useVideo";

const Page = ({ params }) => {
  const { GetComments } = useComment();
  const { GetSingleVideosById, History, GetVideos } = useVideo();

  GetComments(params.videoID);
  GetSingleVideosById(params.videoID);
  History(params.videoID);
  GetVideos();

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

export default Page;
