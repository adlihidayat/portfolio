import React from "react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  date: string;
  author: string;
  link: string;
  image?: string;
}

export default function BlogCard({
  title,
  date,
  author,
  link,
  image,
}: BlogCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-[500px] bg-white rounded-xl overflow-hidden  hover:shadow-xl transition-all group"
    >
      {/* Image Section */}
      <div className="relative h-80 bg-stone-400">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-stone-400" />
        )}
      </div>

      {/* Text Section */}
      <div className="py-5 space-y-4 border-t border-gray-200 tracking-tighter ">
        {/* Title */}
        <h3 className="text-xl leading-5 font-semibold h-20  text-gray-900 border-b border-gray-100 pb-2 line-clamp-2 group-hover:text-blue-600 transition-colors px-5">
          {title}
        </h3>

        {/* Info */}
        <div className="text-sm text-primary space-y-2">
          <div className="flex justify-between border-b border-gray-100 pb-2 px-5">
            <span className="font-semibold">Date</span>
            <span className="font-light">
              {new Date(date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-2 px-5">
            <span className="font-semibold">Author</span>
            <span className=" font-light">{author}</span>
          </div>
          <div className="flex justify-between items-center pt-2 px-5">
            <span className="font-semibold">Link</span>
            {/* Make this look like a link, but don’t nest <a> */}
            <span className=" underline truncate max-w-[60%] text-right font-light">
              {new URL(link).hostname}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
