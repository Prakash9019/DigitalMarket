
import React,{useState} from "react";
import PricingCard from "./PricingCard";

const PricingPage = () => {
  const [active, setActive] = useState('monthly');
  const [isBuying, setIsBuying] = useState(true);

  const handleToggle = () => {
    console.log(isBuying );
    setIsBuying(!isBuying);
  };

  return (
    <div className="flex overflow-hidden flex-col pb-32 bg-white max-md:pb-24 ">
     
   
        {/* BuyerSellerToggle  */}
        <section className="flex overflow-hidden flex-col justify-center items-center pt-20 w-full max-md:px-5 max-md:max-w-full">
<div className="flex flex-col items-center max-w-full w-[624px]">
       
<label className="inline-flex items-center cursor-pointer gap-3 max-w-full">

  <input type="checkbox" value="" className="sr-only peer bg-black"  checked={!isBuying}  onChange={handleToggle} />
  <span className="grow text-2xl font-bold text-black">I'm here to buy</span>

  <div className="relative w-11 h-6 bg-gold peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gold peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gold2"></div>
  <span className="grow text-2xl font-bold text-black">I'm here to sell</span>
</label>

</div>
</section>
{isBuying ? 
  <>
<section className="flex overflow-hidden flex-col justify-center items-center w-full  max-md:px-5 max-md:max-w-full">
<h1 className="self-stretch mt-28 text-6xl font-bold max-w-full text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
  <div> Free for anyone</div>
          <span className="font-bold">Affordable for </span>  <span className="font-bold leading-[85px] bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold2">Premium.</span>
        </h1>
<div className="flex flex-col items-center max-w-full w-[624px]">
    
       
        <div className="flex row">
        <span>All Prices are in </span>
        <div className="flex overflow-hidden gap-1 px-0.5 ml-2 w-11 text-sm font-bold text-black rounded-sm bg-zinc-300">
       
          <div className="grow">INR</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63693617b769a8d6de1e48a5f9f9e62043988c1c04281b8a3977c6f72e2c7c30?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03"
            alt=""
            className="object-contain shrink-0 my-auto w-3 rounded-sm aspect-[1.2]"
          />
        </div></div>
        <div className="flex gap-6 px-0.5 py-1 mt-16 max-w-full border border-solid bg-zinc-300 bg-opacity-40 border-zinc-500 rounded-[50px] w-[401px] max-md:mt-10">
      <button
        className={`px-10 py-2.5 text-base font-semibold whitespace-nowrap rounded-[50px] max-md:px-5 ${
          active === 'monthly' ? 'bg-gradient-to-r from-gold to-gold2 text-white' : 'text-gold2'
        }`}
        onClick={() => setActive('monthly')}
      >
        Monthly
      </button>

      <button
        className={`px-10 py-2.5 text-base font-semibold  whitespace-nowrap rounded-[50px] max-md:px-5 ${
          active === 'quarterly' ? 'bg-gradient-to-r from-gold to-gold2 text-white' : 'text-gold2'
        }`}
        onClick={() => setActive('quarterly')}
      >
        Quarterly (Save 45%)
      </button>

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
      <div className="flex flex-col items-start mb-0 max-w-full w-[898px] max-md:mb-2.5 text-left">
        <h2 className="ml-12 text-5xl max-md:ml-2.5 max-md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-gold
         to-gold2 ">
          P R E M I U M
        </h2>
        <h3 className="mt-8 mb-3 text-5xl font-bold w-[694px] max-md:max-w-full max-md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-gold
         to-gold2">
          Elevate your buying experience with Mango Premium.
        </h3>
        <div className="text-4xl font-medium text-gold2 max-md:max-w-full">
          First Access. Premium Services. One Subscription
        </div>
        <p className="self-stretch mt-9 text-2xl text-black max-md:max-w-full">
          Gain an edge with early access to exclusive listings, and a suite of
          services designed to empower your buying decisions.
        </p>
        <button className="px-10 py-3.5 mt-9 text-3xl text-white bg-gradient-to-r from-gold2
         to-gold rounded-[60px] max-md:px-5">
          Join Premium
        </button>
        <p className="mt-2.5 text-xl text-black">
          Just ₹1399/per month (Cancel Anytime)
        </p>
      </div>
    </section>
    </>
 : 
 
 <section className="flex overflow-hidden flex-col justify-center items-center w-full  max-md:px-5 max-md:max-w-full">
<h1 className="self-stretch mt-28 text-6xl font-bold max-w-full text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
  
          <span className="font-bold">Sell your digital assets with </span>  <span className="font-bold leading-[85px] bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold2">mango.</span>
        </h1>
<div className="flex flex-col items-center max-w-full w-[624px]">
    
       
        <div className="flex row">
        <span>All Prices are in </span>
        <div className="flex overflow-hidden gap-1 px-0.5 ml-2 w-11 text-sm font-bold text-black rounded-sm bg-zinc-300">
       
          <div className="grow">INR</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63693617b769a8d6de1e48a5f9f9e62043988c1c04281b8a3977c6f72e2c7c30?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03"
            alt=""
            className="object-contain shrink-0 my-auto w-3 rounded-sm aspect-[1.2]"
          />
        </div></div>
        
        </div>
        </section>
        
        }
    </div>
  );
};

export default PricingPage;
