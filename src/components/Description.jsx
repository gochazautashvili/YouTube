"use client";

import { QFormat } from "@lib/FormatQuantity";
import moment from "moment";
import { useState } from "react";

const Description = ({ createdAt, desc, views }) => {
  const [read, setRead] = useState(140);

  const handleRead = () => {
    if (read === 140) {
      setRead(desc.length);
    } else {
      setRead(140);
    }
  };

  return (
    <div className="w-full rounded-lg bg-gray-300 my-5 p-4 max-w-[1080px]">
      <p className="mb-2 font-semibold">
        {QFormat(views?.length)} views {moment(createdAt).fromNow()}
      </p>
      <p className="text-gray-700">
        {desc?.slice(0, read)}
        {read === 140 ? "..." : ""}
      </p>
      <p
        onClick={handleRead}
        className="font-semibold text-gray-800 mt-4 underline cursor-pointer"
      >
        {read === 140 ? "Read More" : "Show less"}
      </p>
    </div>
  );
};

export default Description;
