"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "@lib/links";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MySubscribe from "./MySubscribe";
import useVideo from "@hooks/useVideo";

const Aside = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const { getSubscriptionsChannels, subscriptionChannels } = useVideo();
  const path = pathname.includes("/video/") | pathname.includes("/upload");

  getSubscriptionsChannels();

  return (
    <>
      <GiHamburgerMenu
        onClick={() => setMenu((prev) => !prev)}
        size={26}
        className="cursor-pointer lg:hidden mr-4"
      />
      <aside
        className={`flex flex-col w-[240px] h-screen fixed top-20 left-0 bg-white ${
          path ? "" : "lg:flex"
        } ${menu ? "flex" : "hidden"} z-20`}
      >
        <ul className="flex flex-col pl-3 pt-4">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.path}
                onClick={() => setMenu(false)}
                className="flex items-center gap-x-3 hover:bg-gray-100 py-3 px-3 rounded-xl transition duration-500"
              >
                <div>
                  {pathname === link.path ? link.activeIcons : link.icons}
                </div>
                <p
                  className={`${
                    pathname === link.path ? "font-bold" : "font-normal"
                  }`}
                >
                  {link.title}
                </p>
              </Link>
            );
          })}
        </ul>
        <hr className="w-[90%] h-[1px] bg-gray-700 border-none my-3 mx-auto" />
        <ul className="flex flex-col pl-3">
          <h1 className="font-semibold ml-3 mb-1">Subscription</h1>
          {subscriptionChannels?.map((channels, i) => {
            return (
              <Link
                key={i}
                href={`/channel/${channels?._id}`}
                onClick={() => setMenu(false)}
                className="flex items-center gap-x-3 hover:bg-gray-100 py-3 px-3 rounded-xl transition duration-500"
              >
                <MySubscribe name={channels?.name} image={channels?.image} />
              </Link>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Aside;
