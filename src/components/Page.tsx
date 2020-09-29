import React from "react";

function Page() {
  const data = [
    {
      icon: "./icons/shield.svg",
      titlle: "Security",
    },
    {
      icon: "./icons/chess.svg",
      titlle: "Strategy",
    },
    {
      icon: "./icons/puzzle.svg",
      titlle: "Puzzle",
    },
    {
      icon: "./icons/presentation.svg",
      titlle: "Presentation",
    },
    {
      icon: "./icons/laptop.svg",
      titlle: "Chart",
    },
    {
      icon: "./icons/chart.svg",
      titlle: "Data",
    },
    {
      icon: "./icons/paper.svg",
      titlle: "Documents",
    },
  ];

  const Card = ({ item }) => {
    return (
      <div className="max-w-xs   w-28 h-32 bg-white m-2 rounded-md shadow-lg flex flex-col justify-center items-center">
        <img src={`${item.icon}`} alt="" className="w-12 h-12 mb-2" />
        <div className="text-xs text-gray-700">{item.titlle}</div>
      </div>
    );
  };

  return (
    <div className="p-5 h-full flex   ">
      <div className=" flex  flex-wrap">
        <div className="  w-28 h-32 m-2 text-sm flex justify-center items-center text-gray-700">
          General Services
        </div>

        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default Page;
