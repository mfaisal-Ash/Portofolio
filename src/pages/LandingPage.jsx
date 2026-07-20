import { useState, useEffect } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { IoMdCloseCircle } from "react-icons/io";
import MyComponent from "../components/TypingText";
import { loadSlim } from "@tsparticles/slim";
import ParticlesComponent from "../components/ParticlesComponent";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDownload = (language) => {
    const url = language === "en" ? "/resume_en.pdf" : "/resume_id.pdf";
    window.open(url, "_blank");
    closeModal();
  };

  return (
      <section
        className={"relative pt-24 lg:pt-48 pb-12 dark:bg-[#1A1A1A]"}
        id={"home"}
      >
        {init && <ParticlesComponent />}
        <div className="container relative z-10">
          {/* Rest of your existing JSX */}
          <div className="flex flex-wrap">
            <div
              className="w-full self-center px-4 lg:w-1/2"
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
            >
              <h1
                className={
                  "text-base font-semibold text-primary dark:text-[#e5e5e5] md:text-xl"
                }
              >
                Hai Apa Kabar 👋 saya{" "}
                <span
                  className={
                    "block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white"
                  }
                >
                  Muhammad Faisal Ashshidiq
                </span>
              </h1>
              <h2
                className={
                  "font-medium text-lg mb-5 text-slate-600 lg:text-2xl dark:text-slate-300"
                }
              >
                <MyComponent style={{ backgroundColor: "transparent" }} />
              </h2>
              <p
                className={
                  "font-medium text-slate-600 mb-10 leading-relaxed dark:text-slate-300"
                }
              >
                Jangan mudah menyerah dan putus asa.{" "}
                <span className={"text-[#630000] font-bold dark:text-white"}>
                Tak perlu ditakutkan dengan keterbatasan, karena keterbatasan itu hanya ada di pikiran kita sendiri.
                Tak perlu ditakutkan dengan manusia lain, karena karakter manusia lain hanya ada di dalam pikiran sendiri.
                </span>
              </p>
              <div className="flex gap-2">
                <a
                  href="#contact"
                  className={
                    "text-[12px] font-semibold text-white dark:text-[#1A1A1A] py-3 px-8 bg-dark dark:bg-[#CCCCCC] hover:opacity-75 rounded-full transition duration-300 ease-in-out"
                  }
                >
                  Hubungi Saya
                </a>
                <button type="button" onClick={openModal} className="text-[12px] font-semibold text-white dark:text-[#1A1A1A] py-3 px-8 bg-primary hover:opacity-75 rounded-full transition duration-300 ease-in-out">
                  Resume/CV
                </button>
              </div>
            </div>
            <div
              className={"w-full self-end px-4 lg:w-1/2"}
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
            >
              <div className={"relative max-w-[400px] mx-auto lg:mt-[-60px]"}>
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-auto drop-shadow-xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="profileBlobClip" clipPathUnits="userSpaceOnUse">
                      <path
                        d="M49.9,-64.8C64.2,-58.4,74.7,-43.1,77.7,-26.9C80.6,-10.8,75.9,6.2,70.6,23.2C65.4,40.1,59.6,57.1,47.8,66.7C35.9,76.2,18,78.4,1.5,76.3C-15,74.3,-30,68.2,-43.3,59.1C-56.5,49.9,-68,37.9,-72.9,23.5C-77.8,9.1,-76.2,-7.5,-68.9,-20C-61.6,-32.5,-48.6,-40.8,-36.2,-47.7C-23.8,-54.6,-11.9,-60.2,3,-64.3C17.9,-68.4,35.7,-71.1,49.9,-64.8Z"
                        transform="translate(100 100)"
                      />
                    </clipPath>
                  </defs>
                  {/* Bentuk blob sebagai lapisan warna di belakang foto */}
                  <path
                    d="M49.9,-64.8C64.2,-58.4,74.7,-43.1,77.7,-26.9C80.6,-10.8,75.9,6.2,70.6,23.2C65.4,40.1,59.6,57.1,47.8,66.7C35.9,76.2,18,78.4,1.5,76.3C-15,74.3,-30,68.2,-43.3,59.1C-56.5,49.9,-68,37.9,-72.9,23.5C-77.8,9.1,-76.2,-7.5,-68.9,-20C-61.6,-32.5,-48.6,-40.8,-36.2,-47.7C-23.8,-54.6,-11.9,-60.2,3,-64.3C17.9,-68.4,35.7,-71.1,49.9,-64.8Z"
                    transform="translate(100 100)"
                    className="fill-[#630000] dark:fill-[#EEEBDD]"
                  />
                  {/* Foto profil dipotong mengikuti bentuk blob di atas */}
                  <image
                    href="./images/isal.png"
                    x="0"
                    y="0"
                    width="200"
                    height="200"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#profileBlobClip)"
                    style={{ filter: "brightness(1.1)" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div
              className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <div className="flex justify-between items-center gap-3">
                <h2 className="text-lg font-bold mb-4 dark:text-white">
                  Pilih Bahasa Resume
                </h2>
                <button type="button" onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  <IoMdCloseCircle size={24} />
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Silakan pilih bahasa resume yang ingin Anda unduh.
              </p>
              <div className="flex justify-between gap-3">
                <button
                  onClick={() => handleDownload("en")}
                  className="px-4 py-2 bg-primary text-white rounded"
                >
                  English
                </button>
                <button
                  onClick={() => handleDownload("id")}
                  className="px-4 py-2 bg-primary text-white rounded"
                >
                  Indonesia
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
  );
}
