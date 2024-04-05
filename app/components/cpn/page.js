// components/Background.js
import React, { useState, useEffect } from "react";

const images = [
  "https://www.holidify.com/images/cmsuploads/compressed/attr_122072_20190803143736.jpg",
  "https://www.bhutanpeacefultour.com/wp-content/uploads/2019/02/Parliament-Thimphu-Bhutan.jpg",
  "/dzong/a.jpg",
  "/dzong/B$.jpg",
  "/dzong/BC.jpg",
  "/dzong/BP.jpg",
  "/dzong/D,jpg",
  "/dzong/DEO.jpg",
  "/dzong/H.jpg",
  "/dzong/K.jpg",
  "/dzong/PD.jpg",
  "/dzong/TD.jpg",
  "/dzong/WD.jpg",
];

const Background = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
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
      <div className="flex justify-center h-12 backdrop-opacity-15 backdrop-invert bg-green-950/30 w-full">
        <button className="h-10 w-10 mt-1 mr-44 ">
        <img src='/buttons/search.jpg' className="backdrop-opacity-15 backdrop-invert bg-green-950/30 hover:bg-green-950"/>
        </button>
        <a className="mt-2 pl-11 pr-4">home</a>
        <a className="mt-2 pr-4">home</a>
        <a className="mt-2 pr-11">home</a>
        <a href="pages/dashboard" className="w-20 h-9 pt-1 text-center mt-1 ml-44 rounded-md backdrop-opacity-15 backdrop-invert bg-green-950/30 hover:bg-green-950">Schedule</a>
      </div>

      <div className="container mx-auto text-left text-white py-16">
        <div className="flex justify-between pt-6">
          <div className="w-1/2 ">
            <h1 className="text-5xl font-medium text-white px-6">
              Welcome to My Agency
            </h1>
            <p className="text-xl mb-10 text-white px-6">Explore Bhutan.</p>
          </div>

          <div>
            <a
              href="/pages/login"
              className="bg-green-950 text-white py-4 px-12 rounded-full backdrop-invert bg-green-950/30 hover:bg-green-950 mx-5"
            >
              Let's Go
            </a>
          </div>

          {/* <div className="w-1/2 pl-16">
                    <img src="https://source.unsplash.com/random?ux" className="h-64 w-full object-cover rounded-xl" alt="Layout Image" />
                </div> */}
        </div>
      </div>

      <div className="space-x-2 px-4 mt-20 w-screen h-52 backdrop-opacity-15 backdrop-invert bg-green-950/30 justify-evenly grid-cols-2 flex">
        <div
          className="overflow-y-scroll h-full py-6 text-white text-2xl"
          style={{ scrollbarWidth: "none" }}
        >
          <style jsx>{`
            .scroll-container {
              counter-reset: item;
            }

            .scroll-container p {
              counter-increment: item;
              display: flex; /* Added to align content */
              align-items: center; /* Added to align content */
            }

            .scroll-container p::before {
              content: counter(item) ".";
              font-size: 0.5em; /* Adjust size of serial number */
              margin-right: 0.5em; /* Adjust spacing between serial number and text */
            }

            .scroll-container::-webkit-scrollbar {
              display: none; /* Hide scrollbar */
            }

            /* Style for enlarging text on hover */
            .scroll-container p:hover {
              transform: scale(1.1); /* Enlarge by 10% on hover */
              transition: transform 0.2s ease; /* Add transition effect */
              color: #005c29; /* Change hover color to green */
            }
          `}</style>
          <div className="scroll-container px-3">
            <p>
              <a href="/page/hotels" className="border-y w-52 my-5">
                Hotels
              </a>
            </p>
            <p>
              <a href="/page/cars" className="border-y w-52 my-5">
                Cars
              </a>
            </p>
            <p>
              <a href="/page/handicraft" className="border-y w-52 my-5">
                Handicraft
              </a>
            </p>
            <p>
              <a href="/page/wildlife" className="border-y w-52 my-5">
                Wild Life
              </a>
            </p>
            <p>
              <a href="/page/adventure" className="border-y w-52 my-5">
                Adventure
              </a>
            </p>
          </div>
        </div>

        <div className=" w-72 h-52 backdrop-opacity-10 backdrop-invert bg-green-950/30 ">
          <div className="w-full h-14 backdrop-opacity-10 backdrop-invert bg-green-950/30 grid-cols-3 flex justify-evenly py-4">
            <p className="text-sm scroll-container text-white hover:text-green-950 ">
              About Us
            </p>
            <p className="text-sm scroll-container text-white hover:text-green-950 ">
              Contact Us
            </p>
            <p className="text-sm scroll-container text-white hover:text-green-950 ">
              Review
            </p>
          </div>
        </div>
      </div>
      {/* <div className="space-x-2 px-4 mt-20 w-screen h-52 backdrop-opacity-10 backdrop-invert bg-white/30 justify-between overflow-x-scroll flex ">
            <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-auto flex">            
               
                <img src='/hotel/AP.jpg' className="mr-4"/>
                <img src='/hotel/LM.jpg' className="mr-4"/>  
                <img src='/hotel/PK.jpg' className="mr-4"/>  
                <img src='/hotel/SS.jpg' className="mr-4"/>  
                <img src='/hotel/UP.jpg' className="mr-4"/> 
                <p className="absolute text-black text-2xl font-semibold">Hotels</p>
 
            </div>

        <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-scroll flex ">
          <img src="/car/C.jpg" className="mr-4" />
          <img src="/car/K.jpg" className="mr-4" />
          <img src="/car/KS.jpg" className="mr-4" />
          <img src="/car/P.jpg" className="mr-4" />
          <img src="/car/R.jpg" className="mr-4" />
        </div>

        <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-scroll flex ">
          <img src="/handicraft/B.jpg" className="mr-4" />
          <img src="/handicraft/C.jpg" className="mr-4" />
          <img src="/handicraft/D.jpg" className="mr-4" />
          <img src="/handicraft/H.jpg" className="mr-4" />
          <img src="/handicraft/M.jpg" className="mr-4" />
          <img src="/handicraft/P.jpg" className="mr-4" />
        </div>

        <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-scroll flex ">
          <img src="/wildlife/b.jpg" className="mr-4" />
          <img src="/wildlife/C.jpg" className="mr-4" />
          <img src="/wildlife/T.jpg" className="mr-4" />
          <img src="/wildlife/W.jpg" className="mr-4" />
          <img src="/wildlife/.jpg" className="mr-4" />
        </div>

            <div className="w-72 h-52 bg-white backdrop-opacity-10 backdrop-invert bg-white/30 overflow-x-scroll flex "> 
                <img src='/adventure/.jpg' className="mr-4"/>
                <img src='/adventure/.jpg' className="mr-4"/>
                <img src='/adventure/.jpg' className="mr-4"/>
                <img src='/adventure/.jpg' className="mr-4"/>
                <img src='/adventure/.jpg' className="mr-4"/>
            </div>

        </div> */}
    </div>
  );
};

export default Background;
