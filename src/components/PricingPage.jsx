
import React from "react";
import PricingCard from "./PricingCard";

const PricingPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-32 bg-slate-50 max-md:pb-24">
     
     <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[624px]">
        {/* BuyerSellerToggle  */}
        <div className="flex gap-3 max-w-full w-[344px]">
      <div className="grow text-2xl font-bold text-black">I'm here to buy</div>
      <div className="flex flex-col justify-center items-start self-start p-1 mt-2 bg-white border-2 border-yellow-800 border-solid rounded-[100px]">
        <div className="flex shrink-0 w-4 h-4 bg-yellow-500 rounded-full" />
      </div>
      <div className="grow shrink text-2xl font-bold text-black w-[129px]">
        I'm here to sell
      </div>
    </div>
        <h1 className="self-stretch mt-28 mr-3 ml-3 text-6xl font-extrabold text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          <span className="font-bold">Affordable for </span>
          <span className="font-bold leading-[85px]">Premium.</span>
        </h1>
        <div className="flex overflow-hidden gap-1 px-0.5 ml-14 w-11 text-sm font-bold text-black rounded-sm bg-zinc-300">
          <div className="grow">IND</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63693617b769a8d6de1e48a5f9f9e62043988c1c04281b8a3977c6f72e2c7c30?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03"
            alt=""
            className="object-contain shrink-0 my-auto w-3 rounded-sm aspect-[1.2]"
          />
        </div>
        <div className="flex gap-6 px-0.5 py-1 mt-16 max-w-full border border-solid bg-zinc-300 bg-opacity-40 border-zinc-500 rounded-[50px] w-[401px] max-md:mt-10">
          <button className="px-10 py-2.5 text-base font-semibold text-white whitespace-nowrap rounded-[50px] max-md:px-5">
            Monthly
          </button>
          <div className="grow shrink my-auto text-sm text-yellow-800 w-[140px]">
            Quarterly (Save 45%)
          </div>
        </div>
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <PricingCard
              title="Free"
              description="Access limited digital assets for free on mango"
              price="₹0"
              buttonText="Join Mango for Free"
              isFreeTier={true}
            />
            <PricingCard
              title="P R E M I U M"
              description="Get an edge over the competition and browse unlimited assets."
              price="₹1399"
              buttonText="Join Premium"
              isFreeTier={false}
            />
          </div>
        </div>
      </div>
    </section>

      <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-36 font-semibold bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-start mb-0 max-w-full w-[898px] max-md:mb-2.5">
        <h2 className="ml-12 text-5xl max-md:ml-2.5 max-md:text-4xl">
          P R E M I U M
        </h2>
        <h3 className="mt-8 text-5xl font-bold w-[694px] max-md:max-w-full max-md:text-4xl">
          Elevate your buying experience with Mango Premium.
        </h3>
        <div className="text-4xl font-medium text-yellow-800 max-md:max-w-full">
          First Access. Premium Services. One Subscription
        </div>
        <p className="self-stretch mt-9 text-2xl text-black max-md:max-w-full">
          Gain an edge with early access to exclusive listings, and a suite of
          services designed to empower your buying decisions.
        </p>
        <button className="px-16 pt-3.5 pb-9 mt-9 text-3xl text-white rounded-[60px] max-md:px-5">
          Join Premium
        </button>
        <p className="mt-2.5 text-xl text-black">
          Just ₹1399/per month (Cancel Anytime)
        </p>
      </div>
    </section>
    </div>
  );
};

export default PricingPage;
