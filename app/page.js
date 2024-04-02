"use client";
import Home from "./components/loginAndSignin/loginAndsignin";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
    <section className="bg-cover bg-center h-screen w-screen" style={{backgroundImage: "url('https://source.unsplash.com/random')"}}>
    {/* <div className="h-auto w-screen bg-blue items-center  "> */}
    <div className="flex justify-center h-10 w-full">
    <button className= "w-7 h-7 mt-1 bg-white mr-44 text-black">S</button>
    <t className="mt-2 pl-11 pr-4">home</t>
    <t className="mt-2 pr-4">home</t>
    <t className="mt-2 pr-11">home</t>
    <button className="w-16 h-7 bg-white mt-1 ml-44 text-black">T</button>
    </div>

        <div className="container mx-auto text-left text-white py-14">
            <div className="flex items-center mt-4">
                <div className="w-1/2">
                    <h1 className="text-5xl font-medium">Welcome to My Agency</h1>
                    <p className="text-xl mb-10">Explore Bhutan.</p>
                    </div>
                <div>
                    <a href="#" className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600 justify-end ">Let's Go</a>
                </div>
                
                {/* <div className="w-1/2 pl-16">
                    <img src="https://source.unsplash.com/random?ux" className="h-64 w-full object-cover rounded-xl" alt="Layout Image" />
                </div> */}
            </div>
        </div>
        <div className="px-24 mt-20 w-screen h-52 backdrop-opacity-10 backdrop-invert bg-white/30 flex justify-between">
        <div className="w-5/12 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-scroll"> 
      <img src='https://www.holidify.com/images/cmsuploads/compressed/attr_122072_20190803143736.jpg'/>
      <img src='https://www.bhutanpeacefultour.com/wp-content/uploads/2019/02/Parliament-Thimphu-Bhutan.jpg'/>  
    </div>
    </div>
    {/* </div>  */}

    </section>
  


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
