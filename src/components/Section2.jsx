import React from "react";
import m from "../assets/Link-List-Icons-Microsoft-365 (1).svg"
import n from "../assets/Link-List-Icons-Xbox-Games-Consoles.svg"
import o from "../assets/Link-List-Icons-Surface-Devices.svg"

export default function Section2() {
  return (
    <div className="py-4 md:px-24 flex flex-col  items-center justify-between md:flex-row">


      <div className="my-5  ">
        <img className="w-12 mx-auto" src={m} alt="" />
        <p className="pt-3 hover:underline">choose your microsoft 365</p>
      </div>

      <div className="my-5 ">
        <img className="w-12 mx-auto" src={n} alt="" />
        <p className="pt-3 hover:underline">shop xbox</p>
      </div>

      <div className="my-5 ">
        <img className="w-12 mx-auto" src={m} alt="" />
        <p className="pt-3 hover:underline">get windows 11</p>
      </div>

      <div className="my-5 ">
        <img className="w-12 mx-auto" src={o} alt="" />
        <p className="pt-3 hover:underline">explore surface device</p>
      </div>


    </div>
  );
}
