// components/Background.js
"use client";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/app/state/user-context";
import Navbar from "@/app/components/navbar/page";

const images = [
  "/dzong/MS.jpg",
  "/dzong/BP.jpg",
  "/dzong/BS.jpg",
  "/dzong/H.jpg",
  "/dzong/K.jpg",
  "/dzong/Deo.jpg",
  "/dzong/DS.jpg",
  "/dzong/PO.jpg",
  "/dzong/PD.jpg",
  "/dzong/TD.jpg",
  "/dzong/WD.jpg",
  "/dzong/WS.jpg",
  "/dzong/BV.jpg",
  "/dzong/PG.jpg",
  "/dzong/TG.jpg",
  "/dzong/DA.jpg",
  "/dzong/Z.jpg",
  "/dzong/KS.jpg",
  "/dzong/PS.jpg",
  "/dzong/BC.jpg",
  "/dzong/a.jpg",
  "/dzong/L.jpg",
  "/dzong/O.jpg",
  "/dzong/V.jpg",
];

const Background = () => {
  const { user } = useContext(UserContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInput, setShowInput] = useState(false);

  const [activeSection, setActiveSection] = useState("about");
  const sections = {
    about: {
      title: "About Us",
      content:
        "At [Company Name], we're dedicated to redefining [industry/sector] through innovation and excellence. With a relentless focus on quality and customer satisfaction",
    },
    contact: {
      title: "Contact Us",
      content: "17661088",
    },
    review: {
      title: "Review",
      content: "lorepsum",
    },
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="h-screen bg-cover bg-center fixed w-full"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {!user ? null : <Navbar />}
        {!user ? (
          <div className="flex items-center mx-auto h-12 w-1/2 rounded-full my-2 bg-green-950/30 p-2 pl-4">
            <img
              src="/buttons/search.jpg"
              className="backdrop-opacity-15 backdrop-inverth-8 w-8 mr-2"
            />
            <input
              className=" border-none text-white focus:outline-none placeholder-white::placeholder
              rounded-full
              p-2 w-1/2
              bg-transparent"
              style={{ maxWidth: "100%" }} // Limiting the width of the input field
              placeholder="Search..."
            />
          </div>
        ) : null}

        <div className="container mx-auto text-left text-white py-16">
          <div className="flex justify-between pt-6">
            <div className="w-1/2 ">
              <h1 className="font-sans text-5xl text-white px-6 animate-bounce">
                Welcome to T&C Eco Tourism Agent
              </h1>
              <p className="font-sans font-bold text-xl mb-10 md:text-xl text-white px-6 animate-pulse">
                Explore Bhutan.
              </p>
            </div>

            {!user ? (
              <div>
                <a
                  href="/pages/login"
                  className="bg-green-950 text-white py-4 px-12 rounded-full backdrop-invert bg-green-950/30 hover:bg-green-950 mx-5"
                >
                  Let's Go
                </a>
              </div>
            ) : null}
          </div>
        </div>

        <div className="space-x-2 w-screen h-52 backdrop-opacity-15 backdrop-invert bg-green-950/30 justify-evenly grid-cols-2 flex fixed bottom-0">
          <div
            className="overflow-y-scroll h-full py-1 text-white text-2xl"
            style={{ scrollbarWidth: "none" }}
          >
            <style jsx>{`
              .scroll-container {
                counter-reset: item;
              }

              .scroll-container p {
                counter-increment: item;
                display: flex;
                align-items: center;
              }

              .scroll-container p::before {
                content: counter(item) ".";
                font-size: 0.5em;
                margin-right: 0.5em;
              }

              .scroll-container::-webkit-scrollbar {
                display: none;
              }

              .scroll-container p:hover {
                transform: scale(1.1);
                transition: transform 0.2s ease;
                color: #005c29;
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

          <div className="text-right w-72 h-52 backdrop-opacity-10 backdrop-invert bg-green-950/30">
            <div className="w-full h-14 backdrop-opacity-10 backdrop-invert bg-green-950/30 grid-cols-3 flex justify-evenly py-4">
              {Object.keys(sections).map((sectionKey) => (
                <p
                  key={sectionKey}
                  className={`text-sm scroll-container text-white hover:text-green-950 ${
                    activeSection === sectionKey ? "text-green-950" : ""
                  }`}
                  onClick={() => setActiveSection(sectionKey)}
                >
                  {sections[sectionKey].title}
                </p>
              ))}
            </div>
            <div className="h-38 text-white p-4 text-center">
              <p className="text-sm">{sections[activeSection].content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
