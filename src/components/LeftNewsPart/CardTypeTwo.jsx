import React from "react";

import ThumImg from "../../assets/assets/thumb.png";
export default function CardTypeTwo({ data }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
      <div className="col-span-12 md:col-span-6">
        <a href="">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{data.title}</h3>
        </a>
        <p className="text-base text-[#292219]">{data.description}</p>
        <p className="mt-5 text-base text-[#5C5955]">{data.publishedAt}</p>
      </div>

      <div className="col-span-12 md:col-span-6">
        {data.urlToImage ? (
          <img className="w-full" src={data.urlToImage} alt="thumb" />
        ) : (
          <img className="w-full" src={ThumImg} alt="thumb" />
        )}
      </div>
    </div>
  );
}
