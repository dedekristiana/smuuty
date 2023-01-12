import React from "react";

export const Button = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-3 mx-auto">
          <div class="flex flex-col items-center justify-center mt-2 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
            <div class="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800">
              <div class="text-center">
                <p class="text-4xl font-semibold text-gray-800 dark:text-gray-100">
                  PROMO HARI INI
                </p>
                {/* <p class="mt-4 text-gray-500 dark:text-gray-300">
                  Essentail Features
                </p> */}
                <h4 class="mt-2 text-gray-600 line-through font-bold dark:text-gray-400">
                  Rp. 250.000
                </h4>
                <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
                  Rp. 125.000
                </h4>
                <p class="mt-4 text-red-500 font-bold dark:text-red-500">
                  ( gratis emas mini 24 karat )
                </p>
                <p class="mt-4 text-gray-500 font-semibold dark:text-gray-300">
                  Jangan Tunggu Besok, Buktikan Sendiri, Sekarang
                </p>
              </div>
              <a href="https://giveaway.biz.id">
                <button class="w-full h-14 text-xl px-4 py-2 mt-10 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                  BELI SEKARANG(COD)
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
