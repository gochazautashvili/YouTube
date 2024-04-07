"use client";
import Videos from "@components/Videos";
import { Button } from "@components/ui/button";
import useAuth from "@hooks/useAuth";
import useVideo from "@hooks/useVideo";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const { newUser, Logout } = useAuth();
  const { getYourVideosById, YourVideo, deleteVideoByID } = useVideo();
  const [deleteVideo, setDeleteVideo] = useState(false);

  const image = newUser?.image;
  const name = newUser?.name;
  const subscribers = newUser?.subscribers;

  getYourVideosById();

  return (
    <main className="lg:ml-[250px]">
      <div className="flex flex-col items-center gap-4 border-2 border-black rounded-lg p-4">
        <div className="relative w-28 h-28 hover:blur-sm cursor-pointer">
          <Image
            className="w-full h-full rounded-full object-cover"
            src={image ? image : "/team1.webp"}
            alt="your-profile-img"
            width={112}
            height={112}
          />
        </div>
        <h1 className="font-semibold text-xl">
          {name ? name : "Channel Name"}
        </h1>
        <div className="flex justify-between w-full">
          <p className="font-semibold">Subscribers: {subscribers?.length}</p>
          <p className="font-semibold">Video: {YourVideo?.length}</p>
        </div>
        {name && <Button onClick={Logout}>Logout</Button>}
      </div>
      <section>
        <div className="flex justify-between items-center mt-7">
          <h1 className="font-bold">Your Videos</h1>
          <h1
            onClick={() => setDeleteVideo((prev) => !prev)}
            className="cursor-pointer font-extrabold"
          >
            Video Settings
          </h1>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-5 md:grid-cols-3">
          {YourVideo?.map((video) => {
            return (
              <Videos
                deleteVideoByID={deleteVideoByID}
                deleteVideo={deleteVideo}
                views={video.views}
                key={video._id}
                _id={video._id}
                image={video.image_url}
                title={video.title}
                channelImage={image}
                channelName={name}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default page;
