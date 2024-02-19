import React from "react";
import CardTypeOne from "./CardTypeOne";
import CardTypeTwo from "./CardTypeTwo";
import CardTypeThree from "./CardTypeThree";

export default function LeftNewsPart({ data }) {
  // console.log("LeftNew: ", data);
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {data.map((d, index) => {
        if (index == 0) {
          return <CardTypeOne key={crypto.randomUUID()} data={d}></CardTypeOne>;
        } else if (index == 1) {
          return <CardTypeTwo key={crypto.randomUUID()} data={d}></CardTypeTwo>;
        } else if (index != 0 || index != 1) {
          console.log("card 3");
          return (
            <CardTypeThree key={crypto.randomUUID()} data={d}></CardTypeThree>
          );
        }
      })}
    </div>
  );
}
