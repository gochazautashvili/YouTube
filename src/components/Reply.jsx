"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Reply = ({ handleClose, handleSubmit }) => {
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed top-0 left-0 w-full h-screen bg-[rgb(3,5,6,0.6)]"
    >
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center rounded-xl gap-x-3 p-5 fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-full max-w-[800px] h-[300px] bg-gray-600"
      >
        <Input type="text" placeholder="Reply..." />
        <Button>Reply</Button>
      </form>
    </div>
  );
};

export default Reply;
