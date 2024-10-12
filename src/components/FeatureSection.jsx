/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";
 //   <div className="flex gap-3 items-start cursor-pointer border-2 border-indigo-600 rounded p-2 w-full my-auto" onClick={onClick}> for the side view
const FeatureItem = ({ icon, title, description, onClick }) => (
  <div className="flex gap-3 items-start cursor-pointer border-2 hover:border-gold rounded p-2 w-full my-auto mt-3" onClick={onClick}>
    {icon ? <img
      loading="lazy"
      src={icon}
      color="red"
      className="object-contain shrink-0 aspect-square w-[45px]  "
      alt=""
    /> :<p></p>}
    
    <div className="flex-auto mt-1.5 max-md:max-w-full">
      <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gold
         to-gold2">{title}</h3>
      {description && (
        <p className="mt-3 text-xl font-medium text-zinc-500 max-md:max-w-full">
          {description}
        </p>
      )}
    </div>
  </div>
);

const FeatureSideItem = ({  title, description }) => (
  <div className="self-center flex gap-3 items-start p-2 w-full my-auto " >
    
    <div className="flex-auto mt-1.5 max-md:max-w-full">
      <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gold
         to-gold2">{title}</h3>
      {description && (
        <p className="mt-3 text-xl font-medium text-zinc-500 max-md:max-w-full">
          {description}
        </p>
      )}
    </div>
  </div>
);

const FeatureSection = () => {
  const features = [

    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/21e5d5283d02819ace214ab76dbb4aee47f48773cd355b771c14310ab3f8b178?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
      title: "Advanced Legals & Esign",
      description:"A secure platform for managing legal documents and contracts, allowing buyers and sellers to digitally sign agreements. Ensures compliance with Indian regulations, streamlining the transaction process.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1707f4e8d3816d81cc23bb90bdcfdeaae7b8a9504ba6640d841cbb55c0e3e4d?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
      title: "Dynamic Message Environment",
      description:"A real-time messaging system that enables seamless communication between buyers and sellers. Facilitates quick negotiations, updates, and discussions directly within the platform.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/47ecbc708f83a9aa3a60a4d0645dc4470f6d1ffebfe7c9df2d92ac8080806cc8?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
      title: "Accurate & Secured Information",
      description:"Provides verified and reliable data, ensuring that all listings and user details are trustworthy. Protects sensitive information with advanced security measures to maintain privacy and integrity.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b036f78758fc4cac9d88f3d56897a2bd63458f82e806ead495677c6ef2ecea4?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
      title: "Buyer & Seller Insurance",
      description:"Offers protection for both buyers and sellers, covering potential risks during transactions. Ensures a secure environment by safeguarding against financial losses or disputes.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d19d580c334467e04f451d16a0ea975a8c0ddb4d582d668a92734ce6b876f95?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
      title: "Outstanding Comparison Insights",
      description:"Enables users to compare multiple listings with detailed insights, helping them make informed decisions. Highlights key differences and similarities, ensuring the best value selection.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d3791adca08c8d8e82240106d0c7418671121bf58c756ce3a8f20af60a2e83e?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
     title: "Secured Payments",
      description:"Facilitates safe and encrypted transactions, ensuring that payments are protected from fraud. Offers peace of mind by securely handling funds throughout the transaction process.",
    },
  ];

  const [item,setItem]=useState(0);

  return (
    <section className="flex flex-col px-12 pt-10 pb-36 w-full bg-white bg-opacity-90 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="self-center mt-12 -mb-7 w-full max-w-[1103px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gold
         to-gold2 max-md:mt-10 max-md:max-w-full">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  onClick={()=> setItem(index)}
                  icon={feature.icon}
                  title={feature.title}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <FeatureSideItem
              // icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8ed5aabbc38e7641f89aead3f83c778251b4aea3a937d4dceaaaa76e40028aa7?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0"
              title={features[item].title}
              description={features[item].description}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;