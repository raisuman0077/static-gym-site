import { Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="relative bottom-0 max-h-ful w-full flex justify-center items-center p-2 gap-3">
      <div className="font-bolds">Contact Us</div>
      <div className="h-10 border-l-2 border-white" />
      <div className="gap-2 flex-none flex-col ">
        <div className=" italic text-xs font-serif">mokeupsite@gmail.com</div>
        <div className="flex gap-1">
          <Instagram />
          <Facebook size={22} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
