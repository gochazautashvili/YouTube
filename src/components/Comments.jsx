"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import SingleComment from "./SingleComment";
import useComment from "@hooks/useComment";

const Comments = ({ videoID }) => {
  const { comments, createComment } = useComment();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value.trim() !== "") {
      createComment(videoID, e.target[0].value);
      e.target[0].value = "";
    }
  };

  return (
    <section className="flex flex-col mt-4 w-full">
      <div className="flex gap-x-10 items-center relative">
        <h1 className="font-semibold text-xl">{comments?.length} Comments</h1>
      </div>
      <div className="my-10 flex gap-x-5 items-center">
        <Link href="/" className="w-10 h-10 flex-none">
          <Image
            className="rounded-full object-cover w-auto h-full"
            src="/team1.webp"
            alt="your-channel-img"
            width={40}
            height={40}
          />
        </Link>
        <form onSubmit={handleSubmit} className="w-full flex gap-x-5">
          <Input />
          <Button>Comment</Button>
        </form>
      </div>
      <div className="flex flex-col-reverse">
        {comments?.map((comment) => {
          return (
            <SingleComment
              _id={comment?._id}
              key={comment?._id}
              likes={comment?.likes?.length}
              channelID={comment?.channelID?._id}
              createdAt={comment?.createdAt}
              name={comment?.channelID?.name}
              image={comment?.channelID?.image}
              desc={comment?.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Comments;
