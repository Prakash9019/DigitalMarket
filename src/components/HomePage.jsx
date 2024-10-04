
import React, { useEffect, useRef } from 'react';
import ImageGallery from "./ImageGallery";

const HomePage = () => {
  const leftImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/09d341f2aeaa040a629dc342033111aafb6c359a5f168b58dbfb4d0cf1c70cab?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03",
      alt: "Image 1",
      className: "max-w-full rounded-xl shadow-sm aspect-[1.48] w-[296px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df5ab839125b6b899ebd82e72eff2c897a043f963580731ec4936d880442a80d?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03",
      alt: "Image 2",
      className:
        "mt-14 max-w-full rounded-xl shadow-sm aspect-[1.13] w-[226px] max-md:mt-10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2c58bb09a47fe318ac81657a8385cacfcbaa5ccfb3566348d2af85bf7789749?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03",
      alt: "Image 3",
      className:
        "self-stretch mt-14 w-full rounded-xl shadow-sm aspect-[1.58] max-md:mt-10",
    },
  ];

  const rightImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c314d8e2683aa5ad38ebd869bfbddea6edd6e90e7f02406ab873cd8767d64a4?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03",
      alt: "Image 4",
      className: "w-full rounded-xl shadow-sm aspect-[1.47]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb6d3d46a3eb46fa6f504176c5a4f16cd1524ce7ba5cfe77693283e7a5e95934?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03",
      alt: "Image 5",
      className:
        "self-end mt-14 max-w-full rounded-xl shadow-sm aspect-[1.12] w-[225px] max-md:mt-10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d102dbfd6138be522b33fbd0f7486152bb548454e4940761122e6eefcb1e8cfa?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03",
      alt: "Image 6",
      className: "mt-14 w-full rounded-xl shadow-sm aspect-[1.58] max-md:mt-10",
    },
  ];

  const leftGalleryRef = useRef(null);
  const rightGalleryRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = (translateValue) => {
      const leftImages = leftGalleryRef.current.querySelectorAll('.image');
      const rightImages = rightGalleryRef.current.querySelectorAll('.image');

      leftImages.forEach(image => {
        image.style.transform = `translateX(${translateValue})`;
      });

      rightImages.forEach(image => {
        image.style.transform = `translateX(-${translateValue})`;
      });
    };

    const handleMouseLeave = () => {
      const leftImages = leftGalleryRef.current.querySelectorAll('.image');
      const rightImages = rightGalleryRef.current.querySelectorAll('.image');

      leftImages.forEach(image => {
        image.style.transform = 'translateX(0)';
      });

      rightImages.forEach(image => {
        image.style.transform = 'translateX(0)';
      });
    };

    const main = mainRef.current;
    main.addEventListener('mouseenter', () => handleMouseEnter('20px'));
    main.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      main.removeEventListener('mouseenter', () => handleMouseEnter('20px'));
      main.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex overflow-hidden flex-col items-center pt-10 bg-zinc-100 pb-[779px] max-md:pb-24">
      {/* <Header /> */}
      <main ref={mainRef} className="self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <ImageGallery
          images={leftImages}
          ref={leftGalleryRef}
          className="w-[18%] max-md:ml-0 max-md:w-full"
        />
        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          {/* <HeroSection /> */}

          <section className="flex relative z-10 flex-col justify-center items-center px-20 py-32 mt-5 mr-0 text-center text-black min-h-[669px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa792a2b34c897848607ceff3cdbe0b128030421852d05a99a95b1d54a5802c?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center max-w-full w-[628px]">
        <h1 className="self-stretch text-5xl font-bold leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
          <span className="text-gold2">Buy</span> and{" "}
          <span className="text-gold2">Sell</span> Digital Assets Online
          For <span className="text-gold2">India's</span> top{" "}
          <span className="text-gold2">go</span>-
          <span className="text-gold2">getters</span>
        </h1>
        <p className="mt-6 font-figma-hand text-xl w-[437px] max-md:max-w-full">
          Your gateway to India's finest ventures. No{" "}
          <span className="text-black">middlemen</span>. No barriers. Just
          acquire, grow, and excel.
        </p>
        <a
          href="#explore"
          className="px-14 pt-3 pb-4 mt-12 max-w-full text-3xl font-extrabold bg-gradient-to-r from-gold to-gold2 rounded-xl text-zinc-100 w-[300px] max-md:px-5 max-md:mt-10"
        >
          Explore Now
        </a>
      </div>
    </section>

    
        </div>
        <ImageGallery
        ref={rightGalleryRef}
          images={rightImages}
          className="ml-5 w-[18%] max-md:ml-0 max-md:w-full"
        />
      </div>
    </main>
      <section className="flex flex-col text-black items-start px-16 py-14 mt-52 w-full bg-gold rounded-2xl border-2 border-black border-solid max-w-[1202px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div > 
      <h2 className="text-6xl font-bold  leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Your next big thing is waiting
      </h2>
      <p className="mt-5 text-xl font-medium  w-[446px] max-md:max-w-full">
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
          className="flex gap-1.5 px-4 py-3 rounded-md border border-white border-solid bg-black bg-opacity-10"
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
      </div>
    </section>
    </div>
  );
}

export default HomePage;
