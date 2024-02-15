import React from "react";
import ThumImg from "../../assets/assets/thumb.png";
export default function CardOne({ data }) {
  return (
    <div className="col-span-12 mb-6 md:col-span-8">
      {data.urlToImage ? (
        <img className="w-full" src={data.urlToImage} alt="thumb" />
      ) : (
        <img className="w-full" src={ThumImg} alt="thumb" />
      )}

      <div className="col-span-12 mt-6 md:col-span-4">
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
