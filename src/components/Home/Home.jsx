import React, { useState, useEffect } from "react";
import Items from "./Items";
import EventsSection from "./EventsSection";
import VideoBlogSection from "./VideoBlogSection";
import CommitteeSection from "./CommitteeSection";
import ReviewAndFAQ from "./ReviewAndFAQ";
import SocialMediaBar from "./SocialMediaBar";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyBsr12Q4Sk7M-fALe2U4d3U7sRl3RXoWLw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsISFoUdzdYDEOmNoGiZxsM-DUtRqhLLo3mQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC8HdqGL-WlVmau66zaNX1sMDs88GQCSjYw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwfi7OQYE1pmOzB0HI4e2pA0GcJpaLZRf6Q&s",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div>
      <section>
        <div className="relative h-screen w-full">
          <div className="absolute inset-0 overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer"
              onClick={handlePrev}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer"
              onClick={handleNext}
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="relative bottom-0 w-full flex justify-center py-2 px-5 bg-orange-500 text-white rounded p-1 pb-4">
          <p className="text-sm whitespace-nowrap marquee">
            small horizontally running notice display small horizontally running
            notice display small horizontally running notice display
          </p>
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .marquee {
              display: inline-block;
              animation: marquee 15s linear infinite;
            }
          `}</style>
        </div>
      </section>
      <section className=" p-2">
        <SocialMediaBar />
      </section>
      <section className="py-12 pt-2">
        <div className="bg-gradient-to-r from-green-200 to-blue-200 h-auto w-full rounded-lg shadow-lg p-20">
          <h1 className="text-center text-4xl font-bold underline mb-6 text-gray-800">
            Why Holy Name?
          </h1>
          <p className="text-center text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            quia architecto temporibus asperiores sequi facere quis sed quas
            vel, tempore non veniam nostrum ut minima dolor dignissimos repellat
            molestiae qui a. Tenetur blanditiis hic accusantium numquam
            voluptate, eum odit autem neque animi, distinctio aspernatur magnam.
          </p>
        </div>
      </section>

      <section>
        <div className="">
          <Items />
        </div>
      </section>
      <section>
        <div>
          <EventsSection />
        </div>
      </section>
      <section>
        <div>
          <VideoBlogSection />
        </div>
      </section>
      <section>
        <div>
          <CommitteeSection />
        </div>
      </section>
      <section>
        <div>
          <ReviewAndFAQ />
        </div>
      </section>
      </div>
    </div>
  );
}

export default Home;
