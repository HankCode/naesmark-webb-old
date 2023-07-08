import ContactModalFunctionality from "../components/ContactModalFunctionality";
import ContactModal from "../components/ContactModal";
// import {useRef} from "react"
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  const ContactBtn = () => {
    return (
      <>
        {/* <ContactModalFunctionality ref={ref}>
          <ContactModal />
        </ContactModalFunctionality> */}

        <button
          className="transition-all cursor-pointer bg-themeprim hover:bg-themesec text-gray-100 text-center lg:px-8 lg:py-4 sm:px-6 sm:py-3 px-4 py-2 rounded inline-block sm:text-lg text-base font-poppins font-medium"
          // onClick={handleClick}
        >
          henrik@naesmark.com
        </button>
      </>
    );
  };

  // const ref = useRef();
  // const handleClick = () => ref.current?.open();
  return (
    <>
      <div className="flex items-center h-screen">
        <div className="max-w-screen-2xl mx-auto relative sm:px-10 2xl:px-0 px-6 pb-20 lg:pb-0">
          <ThemeSwitcher />
          <div className="lg:flex lg:gap-x-16 items-center">
            <div className="lg:w-3/5">
              <div className="w-40 md:w-56 lg:hidden mx-auto">
                <img src="/img/naesmark_logo_big.png" alt="Naesmark big logo" />
              </div>
              <div className="mt-8 lg:mt-0 font-hallelujah font-semibold tracking-widest dark:text-gray-200 text-gray-600 sm:text-[20px] xs:text-[14px] text-[13px] uppercase ml-2 text-center lg:text-left whitespace-nowrap">
                I'm Henrik Näsmark,{" "}
                <span className="dark:text-green-400 text-green-500">a creative</span>
              </div>
              <div className="md:mt-2 mt-1 xl:text-[90px] lg:text-[71px] md:text-[75px] sm:text-[66px] xs:text-[42px] text-[39px] tracking-wider uppercase font-semibold font-poppins dark:text-themesec text-themeprim text-center lg:text-left leading-10 xl:leading-[84px] md:leading-[65px] sm:leading-[60px]">
                Web designer developer & entrepreneur
              </div>
              <p className="mt-3 md:mt-5 lg:mt-3 xs:text-sm sm:text-xl text-base sm:max-w-[630px] xs:max-w-[420px] mx-auto lg:m-l lg:max-w-full lg:text-left text-center dark:text-gray-200 text-gray-700 lg:pr-32 xl:pr-40 lg:leading-8 sm:leading-7 font-poppins">
                I build modern web solutions for individuals and businesses alike. Both my code and
                my design are custom made from scratch to give a unique touch to your epic masterful
                dreams.
              </p>
              <div className="mt-8 text-center lg:text-left">
                <ContactBtn />
                <div className="transition-all bg-transparent cursor-pointer hover:underline border-themeprim text-gray-700 dark:text-blue-200 text-center lg:px-8 lg:py-4 sm:px-6 sm:py-3 px-4 py-2 rounded inline-block xs:ml-0 ml-4 sm:text-lg text-base font-poppins text-semibold xs:mt-0 mt-3">
                  View resume
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 lg:block hidden max-w-[500px]">
              <img src="/img/naesmark_logo_big.png" alt="Naesmark big logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
