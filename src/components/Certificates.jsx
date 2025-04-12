import { useTranslation } from "react-i18next";
const Certificates = () => {
  const { t } = useTranslation();

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary dark:text-secondary">
          {t("certificates.title")}
        </h2>
        <div className="flex flex-col items-center  ">
       
          <div className="  md:w-[500px] m-10 bg-[#f2f2f2] cursor-pointer rounded-[10px] flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_0_0_5px_#ffffff80] transition-all duration-[600ms] ease-[cubic-bezier(.175,.885,.32,1.275)] hover:scale-[1.1] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]">
            <img
              src="/src/assets/certificat/wxora.jpg"
              alt="Certificate"
              className="  w-full rounded-[10px]  transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className=" md:w-[500px] m-10 bg-[#f2f2f2] cursor-pointer rounded-[10px] flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_0_0_5px_#ffffff80] transition-all duration-[600ms] ease-[cubic-bezier(.175,.885,.32,1.275)] hover:scale-[1.1] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]">
            <img
              src="/src/assets/certificat/udemy.jpg"
              alt="Certificate"
              className=" w-full rounded-[10px] p-3 transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className=" md:w-[500px] m-10 bg-[#f2f2f2] cursor-pointer rounded-[10px] flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_0_0_5px_#ffffff80] transition-all duration-[600ms] ease-[cubic-bezier(.175,.885,.32,1.275)] hover:scale-[1.1] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]">
            <img
              src="/src/assets/certificat/udemy2.jpg"
              alt="Certificate"
              className=" w-full rounded-[10px] p-3 transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* <ul className="text-xl text-gray-700 dark:text-gray-300">
          <li>
            <div className=" h-[400px] w-[500px] bg-amber-100"></div>
          </li>
          <li>شهادة في تصميم الواجهات - 2022</li>
          
        </ul> */}
      </div>
    </section>
  );
};

export default Certificates;
