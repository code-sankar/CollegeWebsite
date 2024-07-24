import React, { useState } from "react";
import SlidingSection from "./SlidingSection";
function Faculty() {
  const [selectedCategory, setSelectedCategory] = useState("Arts");

  const facultyData = {
    Science: [
      {
        name: "Mrs. Dristiraj Das",
        title: "6+ teaching experience ",
        EduQua: "Msci Physics",
        Subject: "Physics",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mr. Dipankar Kayshap",
        title: "7+ teaching experience",
        EduQua: "M.Sc",
        Subject: "Science/Chemistry",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Mrs. Rajashree Chutia",
        title: "6+ teaching experience ",
        EduQua: "MCA",
        Subject: "Computer",
        photo: "https://via.placeholder.com/150",
      },

      {
        name: "Rest you can fill",
        title: " ",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "",
        title: " ",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150", //
      },
    ],
    Arts: [
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },

      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },

      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },

      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
    ],
    SCIENCE :[
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "Rest fill your own",
        title: "",
        EduQua: "",
        Subject: "",
        photo: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <div>
      <section>
        <div>
          <SlidingSection />
        </div>
      </section>
      <div className="bg-gray-100 p-6 md:p-12 lg:p-20 h-auto">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
            Faculty Members
          </h1>

          {Object.entries(facultyData).map(([category, facultyList]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
                {category} Faculty
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {facultyList.map((faculty, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <img
                      src={faculty.photo}
                      alt={faculty.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {faculty.name}
                    </h3>
                    <p className="text-lg mb-2">{faculty.title}</p>
                    <p className="text-lg mb-2">{faculty.Subject}</p>
                    <p className="text-lg text-gray-600">{faculty.EduQua}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
