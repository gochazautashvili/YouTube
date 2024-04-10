import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { QFormat } from "@lib/FormatQuantity";

const SingleVideo = ({ image, title, name, createdAt, id, views }) => {
  return (
    <div className="flex gap-x-3">
      <Link
        className="w-full max-w-[170px] min-w-[140px] flex-[1]"
        href={`/video/${id}`}
      >
        <Image
          className="rounded-xl w-auto h-full"
          src={image}
          width={170}
          height={100}
          alt="single-video-by-category"
        />
      </Link>
      <Link href={`/video/${id}`} className="flex flex-col flex-[1]">
        <h1 className="text-sm sm:text-base font-medium text-black">{title}</h1>
        <p className="mt-1 text-sm text-gray-600">{name}</p>
        <p className="text-[12px] text-gray-500 mt-1">
          {QFormat(views)} views . {moment(createdAt).fromNow()}
        </p>
      </Link>
    </div>
  );
};

export default SingleVideo;
