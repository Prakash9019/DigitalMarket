/**
 * This code was generated by Builder.io.
 */
import React from "react";

const CallToAction = () => {
  return (
    <section className="flex flex-col items-start px-16 py-14 mt-52 w-full bg-indigo-400 rounded-2xl border-2 border-black border-solid max-w-[1202px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-6xl font-bold text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Your next big thing is waiting
      </h2>
      <p className="mt-5 text-xl font-medium text-white w-[446px] max-md:max-w-full">
        Join the community and get exclusive access to our upcoming launches.
      </p>
      <div className="flex gap-4 mt-6 text-sm font-extrabold">
        <a
          href="#access"
          className="px-4 py-3 text-indigo-400 bg-white rounded-md"
        >
          Get Access
        </a>
        <a
          href="#community"
          className="flex gap-1.5 px-4 py-3 text-white rounded-md border border-white border-solid bg-black bg-opacity-10"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f3391ac165fa365135ec4da5284033c8dd54cc4554571273b1dac1feedd6866?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03"
            alt=""
            className="object-contain shrink-0 my-auto w-4 aspect-square"
          />
          <span className="basis-auto">Join Community</span>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;