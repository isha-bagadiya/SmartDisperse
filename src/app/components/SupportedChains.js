"use client";
import React from "react";
import ChainList from "./ChainList";

const SupportedChains = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden mb-[70px]">
      <h1 className="text-[50px] font-medium tracking-normal text-center bg-gradient-to-r from-[#999999] via-white to-[#999999] bg-clip-text text-transparent my-3">
        Supported Chains
      </h1>
      <div className="w-[100%] flex auto-scroll">
        <div className="w-[100%]">
          <ChainList />
        </div>
        <div className="w-[100%] aria-hidden">
          <ChainList />
        </div>
      </div>
    </div>
  );
};

export default SupportedChains;
