import React, { useEffect, useState } from "react";
import Image from "next/image";
import uuid from "uuid";

function Main({ selectedPunk, result }) {
  const [activePunk, setActivePunk] = useState(result?.assets[0]);
  const [ethaddress, setEtherAddress] = useState("");

  useEffect(() => {
    setActivePunk(result?.assets[selectedPunk]);
  }, [selectedPunk, result]);

  useEffect(() => {});

  function makeid() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 40; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  const address = makeid();

  return (
    <div className="max-h[10vh] lg:max-h-[50vh]">
      <div className="flex flex-col lg:flex-row p-4 pb-5 border-b-2 border-gray-700">
        <div className="flex items-center justify-center  flex-[0.25] mx-auto">
          <div className="relative flex flex-col items-center justify-center w-full ">
            <Image
              src={activePunk?.image_original_url}
              width={400}
              height={400}
              quality="50"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between ml-0 lg:ml-2">
          <div className="flex flex-row items-baseline justify-center lg:justify-start w-full text-center flex-[0.75]">
            <h1 className="text-lg lg:text-6xl font-bold">{activePunk.name}</h1>
            <span className="text-[#a1a5b0] text-sm xl:text-2xl ml-2 ">
              .#{activePunk.token_id}
            </span>
          </div>
          <div className="flex items-start   justify-center lg:justify-start lg:items-end">
            <div className="flex flex-col lg:flex-row items-center">
              <div className=" w-12 h-12 rounded-full object-contain mr-4">
                <img
                  src={`https://avatars.dicebear.com/api/micah/${address}.svg`}
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="owner details">
                <div>
                  <h3 className="text-center lg:text-left">ZH NFT</h3>
                </div>
                <div className="">0x{address}</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500  w-12 h-12">
                  <img src={"/img/instagram.png"} alt="insta" />
                </div>
                <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500  w-12 h-12">
                  <img src={"/img/twitter.png"} alt="twitter" />
                </div>
                <div className="hover:bg-gray-200 p-2 rounded-full hover:bg-opacity-60 cursor-pointer hover:text-green-500  w-12 h-12">
                  <img src={"/img/more.png"} alt="twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
