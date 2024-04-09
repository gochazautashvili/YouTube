import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { QFormat } from "@lib/FormatQuantity";

const SingleVideo = ({ image, title, name, createdAt, id, views }) => {
  return (
    <div className="flex gap-x-3">
      <Link className="w-[170px] h-[100px] min-w-[160px]" href={`/video/${id}`}>
        <Image
          className="rounded-xl w-full h-full"
          src={image}
          alt="single-video-by-category"
          width={170}
          height={100}
        />
      </Link>
      <Link href={`/video/${id}`} className="flex flex-col">
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
