"use client";
import useVideo from "@hooks/useVideo";
import SingleVideo from "./SingleVideo";

const CategoryVideo = () => {
  const { videos } = useVideo();

  return (
    <section className="flex flex-col gap-y-4 min-w-[320px]">
      {videos?.map((video) => {
        return (
          <SingleVideo
            views={video?.views?.length}
            key={video._id}
            id={video._id}
            title={video.title}
            image={video.image_url}
            name={video.channelID.name}
            createdAt={video.createdAt}
          />
        );
      })}
    </section>
  );
};

export default CategoryVideo;
