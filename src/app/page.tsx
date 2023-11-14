"use client";
import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";

function Page() {
  const [text, setText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleButton = () => {
    setText(inputValue);
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center bg-slate-400">
      <div className=" w-[250px] h-[300px] bg-gray-200 flex px-5 flex-col items-center justify-center">
        <h1 className=" text-black font-bold text-xl">QR Code Generator</h1>
        <QRCode
          className=" w-[120px] h-[120px] mt-2 border-2 border-gray-400 px-3 py-3 rounded-sm bg-white"
          value={text}
        />

        <div className=" mt-7 justify-stretch">
          <p className=" text-[12px] text-gray-600">Enter your text Here</p>
          <input
            className=" px-2 mt-1 text-[14px] w-[200px] h-[20px] outline-none rounded-sm"
            placeholder="type to convert QR"
            type="text"
            onChange={handleInputChange}
          />
          <button
            className=" self-center ml-[60px] mt-3 text-white font-bold rounded-md bg-green-400 active:bg-green-300 px-4 py-1 active:scale-90"
            onClick={handleButton}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
