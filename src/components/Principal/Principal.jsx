import React from "react";

function Principal() {
  return (
    <div className="bg-gray-100 p-6 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start">
       
        <div className="lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <img
            src="https://via.placeholder.com/150" // Replace with the actual image URL
            alt="Principal"
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-800"
          />
        </div>

        
        <div className="lg:w-2/3 lg:pl-6">
          <h1 className="text-3xl font-bold mb-6 text-center lg:text-left text-green-800">
            Principal's Message
          </h1>
          <p className="text-lg mb-4 leading-relaxed ">
            Holy Name HS School Cherekapar Sivasagar has been, for years, known
            not just for its academic excellence but also for focusing on moral
            and character development, as referred to as "holistic formation".
            It aims to provide an education that fosters intellectual growth,
            discipline, moral integrity, and social responsibility in our
            students. As education is a lifelong journey, the base is laid for
            our students from lower classes through the secondary level.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Our school follows the academic curriculum framework as set by SEBA
            for high school and by AHSEC for the senior secondary level. Our
            institution aims to create an atmosphere of excellence and hard
            work. We believe in the capacity of every student to grow and excel
            in their potentiality, thereby enabling them to contribute
            positively and productively to our society in the future.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            I am confident that, with the support of the management, staff, and
            students, we will continue to grow, prosper, and reach new heights
            in our mission. Our parents are another significant strength in
            molding the future of our children. Their consistent support
            empowers us to do more and more. I extend my gratitude to them for
            their faith in us. Education is not just a process of imparting
            knowledge for a future job but a lifelong process that creates an
            understanding of moral and ethical values to guide one’s life and
            make our students the future hope of our country.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            I would like to conclude this message with the words of Mahatma
            Gandhi:{" "}
            <q className="italic">
              "The best way to find yourself is to lose yourself in the service
              of others."
            </q>{" "}
            As I take on the responsibility of leading this school, with all
            sincerity and humility, I dedicate myself to this noble calling. I
            assure my beloved students, teachers, parents, non-teaching staff,
            and well-wishers that with the help and guidance of Almighty God, I
            will do everything possible to elevate this prestigious institution
            to greater heights.
          </p>
          <p className="text-lg mt-8 text-right font-semibold">
            Fr Hemanta Pegu <br />
            Principal
          </p>
        </div>
      </div>
    </div>
  );
}

export default Principal;
