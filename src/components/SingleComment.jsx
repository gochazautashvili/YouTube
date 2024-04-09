"use client";
import useAuth from "@hooks/useAuth";
import useComment from "@hooks/useComment";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import UpdateComment from "./UpdateComment";
import { useState } from "react";

const SingleComment = ({
  _id,
  desc,
  name,
  image,
  likes,
  createdAt,
  channelID,
}) => {
  const { likeVideo, dislikeVideo, deleteComment } = useComment();
  const { newUser } = useAuth();
  const [update, setUpdate] = useState(false);

  const like = newUser?.likedComment?.includes(_id);
  const dislike = newUser?.dislikedComment?.includes(_id);
  const my = newUser?._id == channelID;

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-x-5 my-4">
          <Link href="/" className="w-10 h-10">
            <Image
              className="w-auto h-full object-cover rounded-full"
              src={image ? image : "/team1.webp"}
              alt="comment-img"
              width={40}
              height={40}
            />
          </Link>
          <div>
            <h1 className="font-semibold text-base">
              {name}
              <span className="text-xs text-gray-600 ml-2">
                {moment(createdAt).fromNow()}
              </span>
            </h1>
            <p className="font-medium text-sm mb-2">{desc}</p>
            <div className="flex gap-x-4 items-center">
              <button
                className="flex"
                onClick={() => likeVideo(_id, newUser?._id)}
              >
                {like ? (
                  <BiSolidLike className="cursor-pointer" size={20} />
                ) : (
                  <BiLike className="cursor-pointer" size={20} />
                )}
                <span className="ml-1">{likes > 0 ? likes : ""}</span>
              </button>
              <button onClick={() => dislikeVideo(_id, newUser?._id)}>
                {dislike ? (
                  <BiSolidDislike className="cursor-pointer" size={20} />
                ) : (
                  <BiDislike className="cursor-pointer" size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="mt-4 border-t pt-1 border-black">
            {my ? (
              <span
                onClick={() => deleteComment(_id)}
                className="cursor-pointer"
              >
                <MdDeleteForever size={22} />
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="ml-[2px] border-b pb-1 border-black">
            {my ? (
              <span onClick={() => setUpdate(true)} className="cursor-pointer">
                <RxUpdate size={18} />
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {update && (
        <UpdateComment desc={desc} commentID={_id} setUpdate={setUpdate} />
      )}
    </>
  );
};

export default SingleComment;
