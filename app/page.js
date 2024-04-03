"use client";
import Home from "./components/loginAndSignin/loginAndsignin";

import { useRouter } from "next/navigation";

import Background from "./components/cpn/page";

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
    <Background/>
    {/* <section className="bg-cover bg-center h-screen w-screen" style={{backgroundImage: "url('https://source.unsplash.com/random')"}}> */}
    

    {/* </section> */}
  
  


        {/* <div className="bg-field bg-cover min-h-screen">
    <div className="flex justify-center h-10 w-full bg-rose-400">
    <button className= "w-7 h-7 mt-1 bg-white mr-44 text-black">S</button>
    <t className="mt-2 pl-11 pr-4">home</t>
    <t className="mt-2 pr-4">home</t>
    <t className="mt-2 pr-11">home</t>
    <button className="w-16 h-7 bg-white mt-1 ml-44 text-black">T</button>
    </div>
    <div className="flex justify-between">
    <t className="mt-36 ml-4">Explore Bhutan</t>
    <button className="rounded-full bg-rose-500 w-14 h-14 mt-28 mr-4 ">Let's Go</button>
    </div>

    <div className="px-24 mt-36 w-screen h-60 backdrop-opacity-10 backdrop-invert bg-white/30 flex justify-between">
    <div className="w-5/12 h-full bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-scroll"> 
      <img src='https://www.holidify.com/images/cmsuploads/compressed/attr_122072_20190803143736.jpg'/>
      <img src='https://www.bhutanpeacefultour.com/wp-content/uploads/2019/02/Parliament-Thimphu-Bhutan.jpg'/>  
    </div>
    </div>
    </div> */}

    
  



    </>
  );
}
