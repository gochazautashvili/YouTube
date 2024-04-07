"use client";
import { RiVideoUploadLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import useAuth from "@hooks/useAuth";

const Profile = () => {
  const { newUser } = useAuth();

  const image = newUser?.image;

  return (
    <div className="gap-x-3 items-center lg:gap-x-5 flex">
      <Link href="/upload">
        <RiVideoUploadLine size={23} className="cursor-pointer" />
      </Link>
      <IoNotificationsOutline size={23} className="cursor-pointer" />
      <Link href="/profile" className="w-9 h-9 cursor-pointer">
        <Image
          className="w-auto h-full rounded-full object-cover"
          src={image ? image : "/team1.webp"}
          alt="your-profile-img"
          width={50}
          height={50}
          priority
          quality={100}
        />
      </Link>
    </div>
  );
};

export default Profile;
