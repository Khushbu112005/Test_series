import { ArrowUpRight, MapPin } from "lucide-react";
import Trophy from "../../assets/images/Trophy.png";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      {/* Hero */}
      <div className="relative bg-cover bg-[center_top] lg:bg-center bg-no-repeat bg-[url('/src/assets/images/topper.png')]">
       <div className="absolute inset-0 bg-gradient-to-r from-[#081126CC] via-[#08112680] to-transparent"></div>
        <div className="wide-screen-content relative grid grid-cols-1 lg:grid-cols-2 px-6 sm:px-10 lg:px-30 pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20">
          {/* Left Content */}
          <div className="">
            <div className="inline-flex items-start gap-2 max-w-full px-4 py-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-[8px] text-white text-[12px] font-inter font-semibold">
              <span className="w-[5px] min-w-[5px] h-[5px] mt-1.5 rounded-full bg-[#00D492]"></span>
              <span>CA INTER · SEPT 2026 — ENROLLMENT OPEN</span>
            </div>

            <h1 className="mt-4 lg:w-[460px] text-white font-georgia font-bold text-[38px] sm:text-[54px] md:text-[64px] lg:text-[72px] leading-[1]">
              India's Most <span className="text-[#A2F4FD]">Trusted</span> Test
              Series
            </h1>

            <p className="mt-4 w-full max-w-[330px] text-[#FFFFFFCC] text-[14px] sm:text-[16px] leading-6">
              ICAI-level papers. Ex-examiner evaluation. Live guidance. India's
              lowest prices.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <Button
                variant="white"
                className="px-5 py-3 dark:bg-[#06B6D4] dark:text-[#FFFFFF]"
              >
                View All Batches
                <ArrowUpRight size={10} />
              </Button>

              <a href="#fame">
                <Button
                  variant="transparent"
                  className="px-5 py-3 dark:bg-[#1A293A80] dark:text-white"
                >
                  Hall of Fame
                  <img
                    src={Trophy}
                    className="w-[14px] h-[14px] object-contain"
                    alt="Hall of Fame"
                  />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex px-0 sm:px-4 lg:justify-end items-center mt-10 lg:mt-0">
            <div className="w-full max-w-[225px] bg-white dark:bg-[#1B2335] rounded-xl px-4 py-2">
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-[#90A1B9] font-bold tracking-wider">
                  HALL OF FAME
                </p>

                <div className="w-[32px] h-[32px] rounded-full bg-[#0891B2] text-white flex items-center justify-center text-[10px] font-bold">
                  #3
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <div className="w-[36px] min-w-[36px] h-[36px] rounded-xl bg-[#0E7490] text-white flex items-center justify-center text-[18px] font-bold">
                  K
                </div>

                <div className="min-w-0">
                  <p className="text-[14px] font-bold text-[#0F172B] dark:text-white truncate">
                    Kirti Agrawal
                  </p>

                  <p className="text-[12px] text-[#62748E]">CA Inter</p>
                </div>
              </div>

              <div className="mt-3 bg-[#E0EAFF] dark:bg-[#263247] rounded-[12px] py-4 text-center">
                <p className="text-[#0891B2] text-[22px] font-bold">370/600</p>
                <p className="text-[8px] text-[#62748E] mt-1">Marks Scored</p>
              </div>

              <div className="flex gap-1 justify-center mt-3">
                <MapPin size={12} color="#62748E" />
                <p className="text-[8px] text-[#8190A5]">MP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#050F1A] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="wide-screen-content flex flex-col justify-center items-center text-center gap-6">
          <h2 className="w-full max-w-[380px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[992px] font-bold font-georgia text-[25px] sm:text-[28px] md:text-[30px] lg:text-[32px] text-[#0F172B] dark:text-slate-100 leading-tight">
            The only test series that organizes live guidance sessions — a
            hand-holding support system for every CA student.
            <span className="text-[#0891B2]">
              {" "}
              Trusted by 5000+ students. Lowest prices in India.
            </span>
          </h2>

          <p className="text-[12px] font-inter text-[#9CA3AF] font-semibold tracking-wide">
            -CHARTERED STUDIES · INDIA
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
