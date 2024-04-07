import { QFormat } from "@lib/FormatQuantity";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiDeleteBin5Line } from "react-icons/ri";

const Videos = ({
  image,
  title,
  _id,
  views,
  channelImage,
  channelName,
  createdAt,
  deleteVideo,
  deleteVideoByID,
}) => {
  return (
    <div className="relative">
      {deleteVideo && (
        <Button
          onClick={() => deleteVideoByID(_id)}
          className="absolute top-1 right-2 z-10 w-6 h-6"
        >
          <span>
            <RiDeleteBin5Line className="stroke-slate-50" size={22} />
          </span>
        </Button>
      )}
      <Link href={`/video/${_id}`} className="w-full relative">
        <div className="w-full max-h-[280px]">
          <Image
            className="w-full h-full rounded-xl"
            src={image}
            width={300}
            height={280}
            alt={title}
            priority
          />
        </div>
        <div className="flex mt-5 gap-x-5">
          <div className="w-10 h-10">
            <Image
              className="w-full h-full rounded-full object-cover"
              src={channelImage ? channelImage : "/team1.webp"}
              alt={channelName}
              width={40}
              height={40}
            />
          </div>
          <div>
            <h1 className="md:text-sm">{title}</h1>
            <p className="my-[2px] text-gray-500 md:text-sm">{channelName}</p>
            <p className="text-gray-500 text-sm">
              {QFormat(views.length)} views . {moment(createdAt).fromNow()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Videos;
