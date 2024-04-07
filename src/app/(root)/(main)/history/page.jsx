"use client";
import Videos from "@components/Videos";
import useAuth from "@hooks/useAuth";
import useVideo from "@hooks/useVideo";
import useYourHistory from "@hooks/useYourHistory";

const History = () => {
  const { historyState } = useVideo();
  const { token } = useAuth();

  useYourHistory(token);

  return (
    <main className="lg:ml-[250px] mt-20 px-6">
      <h1 className="font-semibold text-xl">Your History</h1>
      <section className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {historyState?.map((video) => {
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

export default History;
