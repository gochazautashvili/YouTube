"use client";
import useUpload from "@hooks/useUpload";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const Upload = () => {
  const {
    disable,
    setTitle,
    imageProgress,
    videoProgress,
    setDescription,
    handleUploadImage,
    handleUploadVideo,
    handelCreateVideo,
  } = useUpload();

  return (
    <form onSubmit={handelCreateVideo} className="w-full flex flex-col gap-y-4">
      <Input
        className="border-2 border-black"
        placeholder="Enter Your Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        onChange={(e) => setDescription(e.target.value)}
        className="border-2 border-black"
        placeholder="Enter Video Description"
      />
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="lg:w-1/2">
          <Label htmlFor="video" className="font-medium uppercase mb-1">
            Upload Video{" "}
            <span className="font-bold ml-2">
              {videoProgress && Math.round(videoProgress) + "%"}
            </span>
          </Label>
          <Input
            id="video"
            onChange={handleUploadVideo}
            className="border-2 border-black"
            type="file"
            accept="video/*"
          />
        </div>
        <div className="lg:w-1/2">
          <Label htmlFor="image" className="font-medium uppercase mb-1">
            Upload Image{" "}
            <span className="font-bold ml-2">
              {imageProgress && Math.round(imageProgress) + "%"}
            </span>
          </Label>
          <Input
            id="image"
            onChange={handleUploadImage}
            className="border-2 border-black"
            type="file"
            accept="image/*"
          />
        </div>
      </div>
      <Button disabled={disable}>Create Your Video</Button>
    </form>
  );
};

export default Upload;
