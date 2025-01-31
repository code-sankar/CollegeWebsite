import React from "react";
import { NavLink } from "react-router-dom";

function Admission() {
  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            School Admission Details
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Admission Steps and Timings
            </h2>
            <ol className="list-decimal pl-8 space-y-4 text-gray-700">
              <li>Step 1: Registration -</li>
              <li>Step 2: Entrance Exam - </li>
              <li>Step 3: Interview - </li>
              <li>Step 4: Final Results - </li>
              <li>Step 5: Admission Confirmation - </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Procedure to Apply for Admission Online
            </h2>
            <ol className="list-decimal pl-8 space-y-4 text-gray-700">
              <li>
                Visit our official website and navigate to the Admission
                section.
              </li>
              <li>
                Fill out the online application form with the required details.
              </li>
              <li>
                Upload necessary documents such as birth certificate, previous
                school records, etc.
              </li>
              <li>
                Submit the application form and pay the application fee online.
              </li>
              <li>Receive confirmation and further instructions via email.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Procedure to Apply for Admission Offline
            </h2>
            <ol className="list-decimal pl-8 space-y-4 text-gray-700">
              <li>
                Visit the school office during working hours (9 AM - 3 PM).
              </li>
              <li>Collect the admission application form from the office.</li>
              <li>Fill out the form with the required details.</li>
              <li>
                Attach necessary documents such as birth certificate, previous
                school records, etc.
              </li>
              <li>
                Submit the completed form and pay the application fee at the
                office.
              </li>
              <li>
                Receive confirmation and further instructions from the office
                staff.
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <p className="text-gray-700">
              For any queries related to the admission process, you can contact
              our admission office at (123) 456-7890 or email us at
              admissions@school.com.
            </p>
            <p className="text-gray-700 mt-4">
              Our school provides a range of facilities including modern
              classrooms, a well-equipped library, sports facilities, and
              extracurricular activities to ensure the holistic development of
              students.
            </p>
          </section>

          <div className="text-center">
            <NavLink
              to="/studentportal"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go to Student Portal
            </NavLink>
            <p className="mt-3">For Admission Click to the Student Portal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
