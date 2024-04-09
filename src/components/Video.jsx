"use client";
import { Button } from "./ui/button";
import { BiLike } from "react-icons/bi";
import { BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import Description from "./Description";
import useVideo from "@hooks/useVideo";
import useAuth from "@hooks/useAuth";
import { QFormat } from "@lib/FormatQuantity";

const Video = () => {
  const {
    singleVideo,
    handleLike,
    handleDislike,
    handleShare,
    handleDownload,
    loading,
  } = useVideo();
  const { newUser, handleSubscribe } = useAuth();
  const sub = newUser?.subscribed?.includes(singleVideo?.channelID?._id);
  const itMe = newUser?._id === singleVideo?.channelID?._id;
  const like = newUser?.liked?.includes(singleVideo?._id);
  const dislike = newUser?.disliked?.includes(singleVideo?._id);

  return (
    <section className="flex flex-col">
      <div className="w-full aspect-video rounded-xl border-2 border-black overflow-hidden">
        <iframe
          className="w-full h-full"
          src={singleVideo?.video_url}
          width="666"
          height="375"
          title="name"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <h1 className="my-2 font-semibold text-xl">{singleVideo?.title}</h1>
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between">
        <div className="flex gap-x-6 items-center">
          <Link
            href={`/channel/${singleVideo?.channelID?._id}`}
            className="flex gap-x-2 items-center"
          >
            <div className="w-8 h-8">
              <Image
                className="rounded-full object-cover w-full h-full"
                src={singleVideo?.channelID.image || "/team1.webp"}
                alt="channel"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">{singleVideo?.channelID.name}</h1>
              <p className="text-gray-500 text-sm">
                {singleVideo?.channelID.subscribers.length} subscribers
              </p>
            </div>
          </Link>
          <Button
            disabled={itMe}
            onClick={() => handleSubscribe(singleVideo?.channelID._id)}
            className={`rounded-3xl ${sub ? "bg-red-900" : "bg-black"}`}
          >
            {sub ? "Unsubscribe" : "Subscribe"}
          </Button>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="flex items-center bg-black rounded-3xl overflow-hidden">
            <Button
              disabled={itMe}
              onClick={() => handleLike(singleVideo?._id)}
              className="bg-inherit flex items-center"
            >
              {!like ? <BiLike size={22} /> : <BiSolidLike size={22} />}
              <span className="ml-1 text-base font-bold">
                {QFormat(singleVideo?.likes?.length)}
              </span>
            </Button>
            <div className="w-[2px] h-7 bg-gray-400"></div>
            <Button
              disabled={itMe}
              onClick={() => handleDislike(singleVideo?._id)}
              className="bg-inherit"
            >
              {!dislike ? (
                <BiDislike size={22} />
              ) : (
                <BiSolidDislike size={22} />
              )}
            </Button>
          </div>
          <Button
            disabled={itMe}
            onClick={handleShare}
            className="flex gap-x-2 bg-black hover:bg-primary rounded-3xl"
          >
            <PiShareFat size={22} /> Share
          </Button>
          <Button
            disabled={itMe || loading}
            onClick={() => handleDownload(singleVideo?.video_url)}
            className="flex gap-x-2 bg-black hover:bg-primary rounded-3xl"
          >
            <HiDownload size={22} /> {loading ? "Downloading..." : "Download"}
          </Button>
        </div>
      </div>
      <Description
        views={singleVideo?.views}
        createdAt={singleVideo?.createdAt}
        desc={singleVideo?.description}
      />
    </section>
  );
};

export default Video;
