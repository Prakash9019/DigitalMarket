
import React from "react";

const PricingCard = ({ title, description, price, buttonText, isFreeTier }) => {
  const cardClasses = isFreeTier
    ? "flex flex-col grow items-start px-4 pt-4 pb-7 w-full text-2xl font-extrabold text-black rounded-xl border border-yellow-800 border-solid bg-zinc-100 max-md:mt-6 max-sm:m-4"
    : "flex flex-col grow px-4 pt-4 pb-7 text-2xl font-extrabold  w-full rounded-xl max-md:mt-6 bg-gradient-to-b from-gold to-gold2 text-white max-sm:m-4";

  const buttonClasses = isFreeTier
    ? "self-stretch px-16 py-2 mt-7 w-full text-xs font-medium leading-none text-yellow-800 bg-white border border-yellow-800 border-solid rounded-[40px] max-md:px-5"
    : "px-16 py-1.5 mt-8 text-base font-bold bg-yellow-500 rounded-[40px] max-md:px-5";

  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full  ">
      <div className={cardClasses}>
        <div>{title}</div>
        <div
          className={`mt-5  text-sm leading-4 ${
            isFreeTier ? "text-neutral-700" : "text-zinc-100"
          }`}
        >
          {description}
        </div>
        <div
          className={`mt-2.5 leading-none ${isFreeTier ? "" : "self-start"}`}
        >
          {isFreeTier ? (
            price
          ) : (
            <>
              <span className="font-bold">{price}</span>
              <span className="text-base font-semibold">/</span>
              <span className="text-xs font-semibold">
                {" "}
                per month (Cancel Anytime)
              </span>
            </>
          )}
        </div>
        <button className={buttonClasses}>{buttonText}</button>
      </div>
    </div>
  );
};

export default PricingCard;
