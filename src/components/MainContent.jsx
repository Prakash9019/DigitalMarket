import React, { useEffect, useRef } from 'react';
import ImageGallery from "./ImageGallery";
import HeroSection from "./HeroSection";

const MainContent = () => {
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
    <main ref={mainRef} className="self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <ImageGallery
          images={leftImages}
          ref={leftGalleryRef}
          className="w-[18%] max-md:ml-0 max-md:w-full"
        />
        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <HeroSection />
        </div>
        <ImageGallery
        ref={rightGalleryRef}
          images={rightImages}
          className="ml-5 w-[18%] max-md:ml-0 max-md:w-full"
        />
      </div>
    </main>
  );
};

export default MainContent;
