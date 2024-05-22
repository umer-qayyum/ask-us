import React, { useState } from "react";

const Regions = () => {
  const [state, setState] = useState(false);
  const handleMore = () => {
    if (state === false) {
      setState(true);
    } else if (state === true) {
      setState(false);
    }
  };
  const cards = [
    {
      backgroundImage: "./images/Al-jouf.png", // Replace with your image URL
      text: "Al-JOUF",
    },
    {
      backgroundImage: "./images/tabuk.png", // Replace with your image URL
      text: "TABUK",
    },
    {
      backgroundImage: "./images/nothern.png", // Replace with your image URL
      text: "NOTHERN BORDERS",
    },
    {
      backgroundImage: "./images/hail.png", // Replace with your image URL
      text: "HAIL",
    },
  ];
  return (
    <>
      <div className="max-w-[1320px] mx-auto py-10">
        <h1 className="text-3xl font-semibold text-center">Search By Region</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-[80%]  md:w-full md:h-60 mx-auto h-64 bg-cover bg-center border rounded-xl"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-75"></div>
              <div className="absolute bottom-0 left-0 text-2xl font-bold bg-opacity-50  p-4">
                {card.text}
              </div>
            </div>
          ))}
        </div>


        {state ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative w-[80%]  md:w-full md:h-60 mx-auto h-64 bg-cover bg-center border rounded-xl"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-75"></div>
                <div className="absolute bottom-0 left-0 text-2xl font-bold bg-opacity-50  p-4">
                  {card.text}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {state ? (
          <div className=" text-center">
            <button
              onClick={handleMore}
              className="px-5 py-1 border font-semibold rounded-lg"
            >
              View less
            </button>
          </div>
        ) : null}



        {state ? null : (
          <div className=" text-center">
            <button
              onClick={handleMore}
              className="px-5 py-1 border font-semibold rounded-lg"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Regions;
