import React from "react";

export const Close = () => {
  const lists = [
    { text: "Rambut Menipis Secara Bertahap" },
    { text: "Ada Bagian Kulit Yang Pitak" },
    { text: "garis Rambut Menipis" },
    { text: "Rambut Yang Diikat Lebih Menipis" },
    { text: "Rambut Menipis" },
  ];

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <p className="mt-6 text-xl text-gray-500 dark:text-gray-300">
                Jangan Tunggu Rambut Kepala Anda Rontok dan Menghadirkan Masalah
                Baru Lagi.
              </p>
              <p className="mt-3 text-xl text-gray-500 dark:text-gray-300">
                Jika Anda Sudah Mencapai Fase Ini.
              </p>

              <div className="mt-6 space-y-5">
                {lists.map(({ text, i }) => (
                  <p className="flex text-lg items-center -mx-2 text-gray-500 font-semibold dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="mx-2">{text}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
