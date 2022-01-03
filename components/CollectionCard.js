import React from "react";
import Image from "next/image";

function CollectionCard({ id, name, image, traits, setSelectedPunk }) {
  return (
    <div
      onClick={() => setSelectedPunk(id)}
      className="  text-white bg-[#1a1c1e] rounded-3xl overflow-hidden w-[300px] h-[500px] shadow-2xl cursor-pointer"
    >
      <Image src={image} width={400} height={400} quality="50" />
      <div className="p-5">
        <div className=" text-xl font-bold">
          {name}
          <div className="text-[#a1a5b0] text-lg font-semibold">.#{id}</div>
        </div>
        <div className="priceContainer flex flex-row items-center mt-3 object-contain">
          <img
            src={"/img/weth.png"}
            layout="fill"
            className="h-[23px] w-[15px]"
          />
          <div className="price ml-1 font-semibold">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
