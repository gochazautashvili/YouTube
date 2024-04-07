"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoClose } from "react-icons/io5";
import useComment from "@hooks/useComment";

const UpdateComment = ({ desc, setUpdate, commentID }) => {
  const [newDesc, setNewDesc] = useState(desc);
  const { handleUpdate } = useComment();

  const handelSubmit = (e) => {
    e.preventDefault();

    handleUpdate(commentID, newDesc);
    setUpdate(false);
  };

  return (
    <div className="flex flex-col items-end fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[700px] h-[350px] p-5 rounded-xl bg-slate-600">
      <Button
        onClick={() => setUpdate(false)}
        className="flex-grow justify-end"
      >
        <IoClose size={20} />
      </Button>
      <form
        onSubmit={handelSubmit}
        className="flex h-full items-center justify-center gap-x-2 w-full"
      >
        <Input
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="Update Your Comment!"
        />
        <Button>Update</Button>
      </form>
    </div>
  );
};

export default UpdateComment;
