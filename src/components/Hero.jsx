import React from "react";

const Hero = (props) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="text-center">
            <a
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              {props.logo}
            </a>
          </div>
        </nav>
        <div className="container px-6 py-8 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              {props.Headline}
            </h1>
            <p className="mt-6 text-2xl text-gray-600 dark:text-gray-300">
              {props.paragraf}
            </p>
            <div className="bg-cyan-400 ">
              <p className="mt-6 text-2xl font-semibold text-yellow-300 dark:text-yellow-300">
                {props.paragraf3}
              </p>
            </div>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              {props.paragraf1}
            </p>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              {props.paragraf2}
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <img
              className="object-cover w-full h-full rounded-xl lg:w-4/5"
              src={`/${props.image}`}
            />
          </div>
          <div className="max-w-lg mx-auto">
            <p className="mt-6 text-2xl text-gray-600 dark:text-gray-300">
              {/* Jika Anda Mengalami Masalah Di Bawah Ini */}
              {props.Section}
            </p>
            <p className="mt-3 text-2xl text-gray-600 dark:text-gray-300">
              {/* Jika Anda Mengalami Masalah Di Bawah Ini */}
              {props.Section1}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
