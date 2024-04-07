"use client";
import useAuth from "@hooks/useAuth";
import Videos from "./Videos";
import Auth from "./auth/Auth";
import useVideo from "@hooks/useVideo";

const Hero = () => {
  const { newUser } = useAuth();
  const { GetVideos, videos } = useVideo();

  GetVideos();

  return (
    <>
      {newUser ? (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {videos?.map((video) => {
            return (
              <Videos
                views={video?.views}
                key={video?._id}
                _id={video?._id}
                image={video?.image_url}
                title={video?.title}
                channelImage={video?.channelID?.image}
                channelName={video?.channelID?.name}
                createdAt={video?.createdAt}
              />
            );
          })}
        </section>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Hero;
