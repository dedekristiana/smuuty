import React from "react";

export const Footer = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-3 mx-auto">
          <div class="flex flex-col items-center justify-center mt-2 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
            <div class="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-yellow-400 dark:bg-yellow-400">
              <div class="text-center">
                <p class="text-2xl font-semibold text-red-600 dark:text-red-600">
                  PENYESALAN SELALU DATANG DI KEMUDIAN HARI
                </p>
                <h4 class="mt-2 text-xl font-semibold text-red-600 dark:text-red-600">
                  belum tentu penawaran kami lewat beranda 2x
                </h4>
                <p class="mt-2 text-red-600 font-bold dark:text-red-600">
                  AMBIL PROMO SEKARANG JUGA, SEBELUM STOCK HABIS !!!
                </p>
                <p class="mt-2 text-red-600 dark:text-red-600">
                  Jaminan Keamanan Dengan BAYAR DITEMPAT (COD)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
