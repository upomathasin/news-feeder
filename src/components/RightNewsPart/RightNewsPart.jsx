import React from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

export default function RightNewsPart({ data }) {
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {data.map((d, index) => {
          if (index == 0) {
            return <CardOne key={crypto.randomUUID()} data={d}></CardOne>;
          } else {
            return <CardTwo key={crypto.randomUUID()} data={d}></CardTwo>;
          }
        })}
      </div>
    </div>
  );
}
