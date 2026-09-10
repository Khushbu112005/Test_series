import { ArrowUpRight, MapPin } from "lucide-react";
import Trophy from "../assets/Trophy.png";

function Hero() {
  return (
    <section>
      <div className="bg-[url('assets/topper.png')]">
        <div className="">
          <div className="grid grid-cols-2 px-30 pt-40 pb-20">
            {/* Left Content */}
            <div className="self-start">
              {/* Badge */}
              <div className="w-fit inline-flex items-center gap-2 px-[15.8px] py-[5.8px] rounded-full border border-white/30 bg-white/20 backdrop-blur-[8px] text-white text-[9px] font-semibold">
                <span className="w-[5px] h-[5px] rounded-full bg-[#00D084]"></span>
                CA INTER · SEPT 2026 — ENROLLMENT OPEN
              </div>

              <h1 className="mt-4 w-[600px] text-white font-georgia font-bold text-[72px] leading-[0.98]">
                India's Most <span className="text-[#A2F4FD]">Trusted</span>
                <br />
                Test Series
              </h1>

              <p className="mt-4 w-[330px] text-[#FFFFFFCC] text-[16px] ">
                ICAI-level papers. Ex-examiner evaluation. Live guidance.
                India's lowest prices.
              </p>

              <div className="flex items-center gap-3 mt-5">
                <button className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full font-arial text-[#0891B2] text-[14px] font-bold whitespace-nowrap">
                  View All Batches
                  <ArrowUpRight size={10} />
                </button>

                <button className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 border border-white/30 rounded-full font-arial text-[#FFFFFF] text-[14px] font-semibold">
                  Hall of Fame
                  <img src={Trophy} />
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-end items-center">
              <div className="w-[225px] bg-white rounded-xl px-4 py-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <p className="text-[12px] text-[#90A1B9] font-bold tracking-wider">
                    HALL OF FAME
                  </p>

                  <div className="w-[32px] h-[32px] rounded-full bg-[#0891B2] text-white flex items-center justify-center text-[10px] font-bold">
                    #3
                  </div>
                </div>

                {/* Student */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-[36px] h-[36px] rounded-xl bg-[#0E7490] text-white flex items-center justify-center text-[18px] font-bold">
                    K
                  </div>

                  <div>
                    <p className="text-[14px] font-bold text-[#0F172B]">
                      Kirti Agrawal
                    </p>
                    <p className="text-[12px] text-[#62748E]">CA Inter</p>
                  </div>
                </div>

                {/* Marks */}
                <div className="mt-3 bg-[#E0EAFF] rounded-[12px] py-4 text-center">
                  <p className="text-[#0891B2] text-[22px] font-bold">
                    370/600
                  </p>

                  <p className="text-[8px] text-[#62748E] mt-1">Marks Scored</p>
                </div>

                {/* Location */}
                <div className="flex gap-1 justify-center mt-3">
                  <MapPin size={12} color="#62748E" />
                  <p className="text-[8px] text-[#8190A5] ">MP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <h2 className="w-250 font-bold font-georgia text-[32px] text-[#0F172B]">
            The only test series that organizes live guidance sessions — a
            hand-holding support system for every CA student.
            <br />
            <span className="text-[#0891B2]">
              Trusted by 5000+ students. Lowest prices in India.
            </span>
          </h2>
          <p className="text-[12px] text-[#9CA3AF] font-semibold tracking-wide">
            -CHARTERED STUDIES · INDIA
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
