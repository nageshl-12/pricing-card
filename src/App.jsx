import React from "react";
import { services } from "./svg";
function App() {
  return (
    <div className="flex content-center items-center p-10 ">
      <Box />
    </div>
  );
}
const icons = services;
export default App;

const Box = () => {
  return (
    <div className="bg-[rgba(56,14,14,0.9)] h-128 rounded-3xl flex flex-col  items-center shadow-[0_19px_40px_rgba(0,0,0,0.7)] hover:scale-101 transition duration-300 ">
      <div
        className="w-100 h-110 rounded-3xl content-center items-center flex-col p-6 text-2xl bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('./gold.jpg')" }}
      >
        <div className=" flex gap-1 ">
          <div className="logo">
            <img className="h-14 mt-1 rounded-full" src="./logo1.jpg" alt="" />
          </div>
          <div className="ml-2">
            <h3 className="font-bold">One-Time</h3>
            <p className="font-light text-black-500/50 text-lg">
              Launch your dream site in 7 days
            </p>
          </div>
        </div>
        <ul className="flex-col flex mt-5 gap-6 h-55 content-center list-none text-[20px] border-b border-black/20  border-t">
          {services.slice(0, 4).map((icon, i) => (
            <li key={i} className="flex items-center gap-1 m-1">
              {icon.icon}
              {icon.title}
            </li>
          ))}
        </ul>
        <div className="flex text-[20px] items-center w-90">
          <div className="flex-col mt-4 w-27">
            <h5 className="text-[22px] font-bold">$1300</h5>
            <p className="text-sm text-black/75 ">Billed one time</p>
          </div>
          <div className="ml-25 mt-5">
            <button className="bg-black cursor-pointer text-white p-2 rounded-xl border w-35 content-center items-center border-black flex gap-1 hover:scale-104 transition duration-300 ">
              {icons[4].icon}Get Started
            </button>
          </div>
        </div>
      </div>
      <h5 className="mt-5 text-2xl text-[22px] text-white/90">
        Choose Design Only
      </h5>
    </div>
  );
};
