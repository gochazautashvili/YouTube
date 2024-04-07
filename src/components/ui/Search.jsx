"use client";
import { useState } from "react";
import MobileSearch from "./MobileSearch";
import { Button } from "./button";
import { Input } from "./input";
import { CiSearch } from "react-icons/ci";
import useVideo from "@hooks/useVideo";

const Search = () => {
  const [search, setSearch] = useState(false);
  const { searchVideos } = useVideo();

  return (
    <form
      onSubmit={searchVideos}
      className="flex gap-x-1 flex-grow justify-end mx-5 sm:justify-center"
    >
      <Input className="max-w-[450px] w-full border-2 border-gray-500 focus:border-black hidden sm:flex" />
      <div onClick={() => setSearch(true)}>
        <Button>
          <CiSearch size={20} />
        </Button>
      </div>
      {search && <MobileSearch setSearch={setSearch} />}
    </form>
  );
};

export default Search;
