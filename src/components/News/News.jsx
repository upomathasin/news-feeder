import React from "react";
import { useNewsQuery } from "../../hooks";
import RightNewsPart from "../RightNewsPart/RightNewsPart";
import LeftNewsPart from "../LeftNewsPart/LeftNewsPart";

export default function News() {
  const [news] = useNewsQuery();
  let LeftPart = [];
  let RightPart = [];
  news.map((n, index) => {
    if (index % 2 == 0) {
      LeftPart.push(n);
    } else {
      RightPart.push(n);
    }

    // console.log("left : ", LeftPart);
  });
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <LeftNewsPart data={LeftPart}></LeftNewsPart>
        <RightNewsPart data={RightPart}></RightNewsPart>
      </div>
    </main>
  );
}
