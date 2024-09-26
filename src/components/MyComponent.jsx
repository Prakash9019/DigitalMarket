
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import CallToAction from "./CallToAction";

function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-10 bg-zinc-100 pb-[779px] max-md:pb-24">
      <Header />
      <MainContent />
      <CallToAction />
    </div>
  );
}

export default MyComponent;
