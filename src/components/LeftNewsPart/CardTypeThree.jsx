import React from "react";

export default function CardTypeThree({ data }) {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="col-span-12 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{data.title}</h3>
        </a>
        <p className="text-base text-[#aea08d]">{data.description}</p>
        <p className="mt-5 text-base text-[#94908C]">{data.publishedAt}</p>
      </div>
    </div>
  );
}
