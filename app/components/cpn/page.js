// components/Background.js
import React, { useState, useEffect } from 'react';

const images = [
    'https://www.holidify.com/images/cmsuploads/compressed/attr_122072_20190803143736.jpg',
    'https://www.bhutanpeacefultour.com/wp-content/uploads/2019/02/Parliament-Thimphu-Bhutan.jpg',
    '/dzong/a.jpg',
    '/dzong/B$.jpg',
    '/dzong/BC.jpg',
    '/dzong/BP.jpg',
    '/dzong/CM.jpg',
    '/dzong/D,jpg',
    '/dzong/DEO.jpg',
    '/dzong/Gangtey.jpg',
    '/dzong/H.jpg',
    '/dzong/K.jpg',
    '/dzong/M.jpg',
    '/dzong/PD.jpg',
    '/dzong/TD.jpg',
    '/dzong/WD.jpg'

]


const Background = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center fixed top-0 left-0 w-full"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
        <div className="flex justify-center h-10 w-full">
            <button className= "w-7 h-7 mt-1 bg-white mr-44 text-black">S</button>
            <t className="mt-2 pl-11 pr-4">home</t>
            <t className="mt-2 pr-4">home</t>
            <t className="mt-2 pr-11">home</t>
            <button className="w-16 h-7 bg-white mt-1 ml-44 text-black">T</button>
        </div>

        <div className="container mx-auto text-left text-white py-16">
            <div className="flex justify-between pt-6">
                <div className="w-1/2 ">
                    <h1 className="text-5xl font-medium text-green-950">Welcome to My Agency</h1>
                    <p className="text-xl mb-10 text-green-950">Explore Bhutan.</p>
                </div>

                <div>
                    <a href="#" className="bg-green-950 text-white py-4 px-12 rounded-full hover:bg-green-800">Let's Go</a>
                </div>
                
                {/* <div className="w-1/2 pl-16">
                    <img src="https://source.unsplash.com/random?ux" className="h-64 w-full object-cover rounded-xl" alt="Layout Image" />
                </div> */}
            </div>
        </div>

        <div className="space-x-2 px-4 mt-20 w-screen h-52 backdrop-opacity-10 backdrop-invert bg-white/30 justify-between overflow-x-scroll flex ">
            <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-auto flex">            
               
                <img src='/hotel/AP.jpg' className="mr-4"/>
                <img src='/hotel/LM.jpg' className="mr-4"/>  
                <img src='/hotel/PK.jpg' className="mr-4"/>  
                <img src='/hotel/SS.jpg' className="mr-4"/>  
                <img src='/hotel/UP.jpg' className="mr-4"/> 
                <p className="absolute text-black text-2xl font-semibold">Hotels</p>
 
            </div>

            <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-scroll flex "> 
                <img src='/car/C.jpg' className="mr-4"/>  
                <img src='/car/K.jpg' className="mr-4"/> 
                <img src='/car/KS.jpg' className="mr-4"/>  
                <img src='/car/P.jpg' className="mr-4"/>  
                <img src='/car/R.jpg' className="mr-4"/>  
            </div>

            <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-scroll flex "> 
                <img src='/handicraft/B.jpg' className="mr-4"/>
                <img src='/handicraft/C.jpg' className="mr-4"/>
                <img src='/handicraft/D.jpg' className="mr-4"/>
                <img src='/handicraft/H.jpg' className="mr-4"/>
                <img src='/handicraft/M.jpg' className="mr-4"/>
                <img src='/handicraft/P.jpg' className="mr-4"/>
            </div>

            <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-scroll flex "> 
                <img src='/wildlife/b.jpg' className="mr-4"/>
                <img src='/wildlife/C.jpg' className="mr-4"/>
                <img src='/wildlife/T.jpg' className="mr-4"/>
                <img src='/wildlife/W.jpg' className="mr-4"/>
                <img src='/wildlife/.jpg' className="mr-4"/>
            </div>

            <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-scroll flex "> 
                <img src='/adventure/.jpg' className="mr-4"/>
                <img src='/adventure/.jpg' className="mr-4"/>
                <img src='/adventure/.jpg' className="mr-4"/>
                <img src='/adventure/.jpg' className="mr-4"/>
                <img src='/adventure/.jpg' className="mr-4"/>
            </div>

        </div>

</div>
  );
};

export default Background;
