import React, { useState, useEffect } from "react";
import Items from "./Items";
import EventsSection from "./EventsSection";
import VideoBlogSection from "./VideoBlogSection";
import CommitteeSection from "./CommitteeSection";
import ReviewAndFAQ from "./ReviewAndFAQ";
import SocialMediaBar from "./SocialMediaBar";
import StudentPortalBtn from "../StudentPortal/StudentPortalBtn";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "src/Pictures/1.JPG",
    "src/Pictures/2.JPG",
    "src/Pictures/3.JPG",
    "src/Pictures/4.JPG",
    "src/Pictures/5.JPG",
    "src/Pictures/6.JPG",
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
        <div>
          <section className=" flex flex-row justify-center items-start p-4 bg-gray-100">
            {/* Notice Section */}
            <div className="md:w-1/4 lg:w-1/6 xl:w-1/12 bg-white p-3 text-center rounded-xl shadow-lg overflow-hidden">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Notices</h3>
              {/* Placeholder for PDF links */}
              <p className="text-blue-600 cursor-pointer">
                {" "}
                * This site is currently under maintainance it will be back
                online soon
              </p>
              <p className="text-blue-600 cursor-pointer">
                {" "}
                * This site will be fully functional after maintainance
              </p>
            </div>

            {/* Sliding Section */}
            <div className="sliding-bar relative w-10/12  pl-4 ml-6 mr-6 bg-white rounded-lg shadow-lg overflow-hidden">
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
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer"
                  onClick={handlePrev}
                >
                  &#10094;
                </button>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer"
                  onClick={handleNext}
                >
                  &#10095;
                </button>
              </div>
            </div>

            {/* Social Media Links Section */}
            <div className="w-1/8 bg-white p-4  shadow-lg flex-row">
              <h3 className="font-bold text-xl text-center text-gray-800 mb-4">
                Follow Us
              </h3>
              <SocialMediaBar />
            </div>
          </section>
        </div>
        <div className="p-2">
          <StudentPortalBtn />
        </div>
        <section>
          <div className="relative bottom-0 w-full flex justify-center py-2 px-5 bg-purple-700 text-white rounded p-1 pb-4">
            <p className="text-sm whitespace-nowrap marquee">
              This site is under maintainance This site is under maintainance
              This site is under maintainance This site is under maintainance
              This site is under maintainance This site is under maintainance
              This site is under maintainance This site is under maintainance
              This site is under maintainance
            </p>
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(10%);
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

        <section className="py-12 pt-2">
          <div className="bg-gradient-to-r from-green-200 to-blue-200 h-auto w-full rounded-lg shadow-lg p-20">
            <h1 className="text-center text-4xl font-bold underline mb-6 text-gray-800">
              Why Holy Name?
            </h1>
            <p className="text-center text-xl text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem quia architecto temporibus asperiores sequi facere quis
              sed quas vel, tempore non veniam nostrum ut minima dolor
              dignissimos repellat molestiae qui a. Tenetur blanditiis hic
              accusantium numquam voluptate, eum odit autem neque animi,
              distinctio aspernatur magnam.
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
