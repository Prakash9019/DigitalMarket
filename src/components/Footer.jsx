
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start mt-22 ml-8 max-w-full text-xl font-light leading-7 text-black w-[450px] max-md:mt-10 pb-12">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/61b6433c9998c44721988d99cdf66baa539b867c5f2652d6c6171391e128d8b0?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03"
        alt=""
        className="object-contain max-w-full aspect-[2.84] w-[400px]"
      />
      <p className="mt-6 ml-4 max-md:max-w-full">
        We're India's first ever online marketplace offering users to buy and
        sell their digital assets.
      </p>
    </footer>
  );
};

export default Footer;
