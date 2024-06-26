"use client";
import Videos from "@components/Videos";
import useAuth from "@hooks/useAuth";
import useSubscriptions from "@hooks/useSubscriptions";
import useVideo from "@hooks/useVideo";

const Subscription = () => {
  const { subscription } = useVideo();
  const { token } = useAuth();

  useSubscriptions(token);

  return (
    <main className="lg:ml-[250px] mt-20 px-6">
      <h1 className="font-semibold text-xl">Your Subscriptions</h1>
      <section className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {subscription?.map((video) => {
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
    </main>
  );
};

export default Subscription;
