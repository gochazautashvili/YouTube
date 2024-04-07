"use client";
import useAuth from "@hooks/useAuth";
import Auth from "./auth/Auth";
import useVideo from "@hooks/useVideo";
import useVideosEffect from "@hooks/useVideosEffect";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
const Videos = dynamic(() => import("./Videos"), { ssr: false });

const Hero = () => {
  const searchParams = useSearchParams();
  const searchPath = searchParams.get("search-videos");
  const { token } = useAuth();
  const { newUser } = useAuth();
  const { videos } = useVideo();

  useVideosEffect(searchPath, token);

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
