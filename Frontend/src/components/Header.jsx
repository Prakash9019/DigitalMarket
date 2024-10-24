
// import React from "react";

// const Header = () => {
//   return (
//     <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-16 py-9 w-full text-2xl bg-white max-md:px-5 max-md:max-w-full">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4b44c8ccffcd7b79c32192f2bf19fddbab27b93d49a90026b04e9fa8145eee?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03"
//         alt=""
//         className="object-contain shrink-0 max-w-full aspect-[2.86] w-[200px]"
//       />
//       <nav className="flex flex-wrap gap-10 self-start mt-1">
//         <div className="flex gap-5 my-auto font-medium">
//           <div className="overflow-hidden z-10 self-start pt-0 mt-2 text-black max-md:pr-0">
//             Categories
//           </div>
//           <div>Pricing</div>
//         </div>
//         <div className="flex flex-auto gap-10">
//           <div className="overflow-hidden z-10 pt-0 my-auto font-medium text-black">
//             About Us
//           </div>
//           <button className="flex flex-col justify-center px-1.5 py-1 font-bold text-white bg-black rounded-3xl">
//             <span className="z-10 px-8 pt-3.5 pb-8 mt-0 bg-black rounded-3xl border border-white border-solid max-md:px-5 max-md:-mr-1.5">
//               Deal In Asset
//             </span>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';

// const Header = () => {
//   return (
//     <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-16 py-9 w-full text-2xl bg-white max-md:px-5 max-md:max-w-full">
//       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4b44c8ccffcd7b79c32192f2bf19fddbab27b93d49a90026b04e9fa8145eee?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03" alt="" className="object-contain shrink-0 max-w-full aspect-[2.86] w-[200px]" />
//       <nav className="flex flex-wrap gap-10 self-start mt-1">
//         <div className="flex gap-5 my-auto font-medium">
//           <div className="overflow-hidden z-10 self-start pt-0 mt-2 text-black max-md:pr-0">
//             Categories
//           </div>
//           <div>Pricing</div>
//         </div>
//         <div className="flex flex-auto gap-10">
//           <div className="overflow-hidden z-10 pt-0 my-auto font-medium text-black">About Us</div>
//           <button className="flex flex-col justify-center px-1.5 py-1 font-bold text-white bg-black rounded-3xl">
//             <span className="z-10 px-8 pt-3.5 pb-8 mt-0 bg-black rounded-3xl border border-white border-solid max-md:px-5 max-md:-mr-1.5">
//               Deal In Asset
//             </span>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="m-5 flex flex-wrap gap-5 justify-between  text-2xl font-medium text-black max-w-full max-md:max-w-full">
      <Link to="/"> <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4b44c8ccffcd7b79c32192f2bf19fddbab27b93d49a90026b04e9fa8145eee?placeholderIfAbsent=true&apiKey=c59f5e5e431d46fb9fcb854f2676cd03"
        alt="Company logo"
        className="object-contain shrink-0 max-w-full aspect-[2.86] w-[200px]"
      /> </Link>
      
      <nav className="flex flex-wrap gap-8 items-center my-auto max-md:max-w-full max-sm:gap-1">
        <Link
          to="/categories"
          className="overflow-hidden z-10 self-stretch pt-0 my-auto max-md:pr-0"
        >
          Categories
        </Link>
        <Link
          to="/pricing"
          className="overflow-hidden z-10 self-stretch pt-0 my-auto"
        >
          Pricing
        </Link>
        <Link
          to="/about"
          className="overflow-hidden z-10 self-stretch pt-0 my-auto"
        >
          About Us
        </Link>
        <Link
          to="/access"
          className="self-stretch px-5 pt-3 pb-5 font-extrabold text-white bg-black rounded-xl max-md:px-5"
        >
          Deal In Asset
        </Link>
        
      </nav>
    </header>
  );
};

export default Header;
