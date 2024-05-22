import React, { useState } from "react";

const Brands = () => {
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
      imageUrl: "./images/toyta.png", // Replace with your image URL
    },
    {
      imageUrl: "./images/honda.png", // Replace with your image URL
    },
    {
      imageUrl: "./images/ford.png", // Replace with your image URL
    },
    {
      imageUrl: "./images/audi.png", // Replace with your image URL
    },
    {
        imageUrl: "./images/kia.png", // Replace with your image URL
      },
  ];
  return (
    <>
      <div className="max-w-[1320px] mx-auto py-10">
        <h1 className="text-3xl font-semibold text-center">Search By Brands</h1>
        <h1 className="text-md  text-center text-slate-500">With thousands of cars, we have just the right one for you</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3   my-5">
          {cards.slice(0, 5).map((card, index) => (
            <div
              key={index}
              className="relative w-[80%] h-full md:w-60 md:h-60 mx-auto overflow-hidden rounded-lg shadow-md flex justify-center items-center border"
            >
              <img
                src={card.imageUrl}
                alt={`Card ${index + 1}`}
                className="object-contain w-[50%] h-[50%]"
              />
            </div>
          ))}
        </div>

        {state ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-5">
          {cards.slice(0, 5).map((card, index) => (
            <div
              key={index}
              className="relative w-[80%] h-full md:w-60 md:h-60 mx-auto overflow-hidden rounded-lg shadow-md flex justify-center items-center"
            >
              <img
                src={card.imageUrl}
                alt={`Card ${index + 1}`}
                className="object-contain w-[50%] h-[50%]"
              />
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

export default Brands;
