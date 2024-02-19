import React from "react";

export default function CardTwo({ data }) {
  return (
    <div className="col-span-12 md:col-span-8">
      <div className="col-span-12 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
            {data.title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">{data.description}</p>
        <p className="mt-5 text-base text-[#94908C]">{data.publishedAt}</p>
      </div>
    </div>
  );
}
