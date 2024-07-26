import React from "react";
import SlidingSection from "./SlidingSection";

function Faculty() {
  const facultyData = {
    Guest: [
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
    ],
    Science: [
      {
        name: "Mrs. Dristiraj Das",
        title: "6+ teaching experience",
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
        title: "6+ teaching experience",
        EduQua: "MCA",
        Subject: "Computer",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
    ],
    Arts: [
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
        photo: "https://via.placeholder.com/150",
      },
      {
        name: "XYZ",
        title: "xyz",
        EduQua: "xyz",
        Subject: "xyz",
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
      <div className="bg-gray-100 p-6 md:p-32 lg:p-30 h-auto">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
            Meet Our Teachers
          </h1>

          {/* Guest Faculty Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
              Guest Faculty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyData.Guest.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-52 h-32 object-cover mx-auto mb-2"
                  />
                  <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
                  <p className="text-lg mb-2">{faculty.title}</p>
                  <p className="text-lg mb-2">{faculty.Subject}</p>
                  <p className="text-lg mb-2">{faculty.EduQua}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Science Faculty Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
              Science Faculty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyData.Science.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-52 h-32 object-cover mx-auto mb-2"
                  />
                  <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
                  <p className="text-lg mb-2">{faculty.title}</p>
                  <p className="text-lg mb-2">{faculty.Subject}</p>
                  <p className="text-lg mb-2">{faculty.EduQua}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arts Faculty Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-800">
              Arts Faculty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyData.Arts.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-52 h-32 object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
                  <p className="text-lg mb-2">{faculty.title}</p>
                  <p className="text-lg mb-2">{faculty.Subject}</p>
                  <p className="text-lg mb-2">{faculty.EduQua}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
