import React from "react";
import ThumImg from "../../assets/assets/thumb_lg.png";
export default function CardTypeOne({ data }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
            {data.title}
          </h3>
        </a>
        <p className="text-base text-[#5C5955]">{data.description}</p>
        <p className="mt-5 text-base text-[#5C5955]">{data.publishedAt}</p>
      </div>

      <div className="col-span-12 lg:col-span-8">
        {data.urlToImage ? (
          <img className="w-full" src={data.urlToImage} alt="thumb" />
        ) : (
          <img className="w-full" src={ThumImg} alt="thumb" />
        )}
        <p className="mt-5 text-base text-[#5C5955]">
          Illustration: Karolis Strautniekas
        </p>
      </div>
    </div>
  );
}
