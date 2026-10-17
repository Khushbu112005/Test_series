import { ArrowUpRight } from "lucide-react";
import T1 from "../../assets/images/T1.png";
import T2 from "../../assets/images/T2.png";
import T3 from "../../assets/images/T3.png";
import T4 from "../../assets/images/T4.png";
import T5 from "../../assets/images/T5.jpg";
import T6 from "../../assets/images/T6.jpg";
import T7 from "../../assets/images/T7.jpg";
import SectionHeading from "./SectionHeading";

function Toppers() {
  const toppers = [
    {
      id: "01",
      image: T1,
      name: "Himanshi Duhan",
      course: "CA Intermediate",
      marks: "471",
      total: "600",
    },
    {
      id: "02",
      image: T2,
      name: "Kirti Agrawal",
      course: "CA Intermediate",
      marks: "370",
      total: "600",
    },
    {
      id: "03",
      image: T3,
      name: "Divya Patil",
      course: "CA Intermediate",
      marks: "358",
      total: "600",
    },
    {
      id: "04",
      image: T4,
      name: "Rahul Kashyap",
      course: "CA Intermediate",
      marks: "351",
      total: "600",
    },
  ];

  const otherToppers = [
    {
      id: "05",
      image: T5,
      name: "Ansh Babbar",
      course: "CA Foundation",
      marks: "345",
      total: "400",
    },
    {
      id: "06",
      image: T6,
      name: "Jiya Jagdale",
      course: "CA Foundation",
      marks: "299",
      total: "400",
    },
    {
      id: "07",
      image: T7,
      name: "Hemaang Bhardwaj",
      course: "CA Foundation",
      marks: "287",
      total: "400",
    },
  ];

  return (
    <section className="bg-[#171F31] dark:bg-[#0F172AF2] p-6 lg:px-32 py-16" id="fame">
      <div className="wide-screen-content flex flex-col gap-12">
        {/* Heading */}
        {/* <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="w-[20px] h-[1px] bg-[#06B6D4]"></span>

            <p className="text-[#06B6D4] text-[8px] font-semibold tracking-[1.5px]">
              HALL OF FAME
            </p>
          </div>

          <h2 className="font-georgia font-bold text-[30px] leading-[1.2] text-white">
            Students Who
            <br />
            <span className="text-[#06B6D4]">Reached The Top.</span>
          </h2>
        </div> */}

        <SectionHeading
          title="HALL OF FAME"
          subtitle="Students Who"
          highlight="Reached the Top."
          subtitleColor="text-[#FDFCFB]"
          highlightColor="text-[#06B6D4]"
        />

        {/* Main Toppers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {toppers.map((topper) => (
            <div
              key={topper.id}
              className="relative h-[368px] rounded-[12px] overflow-hidden group"
            >
              {/* Image */}
              <img
                src={topper.image}
                alt={topper.name}
                className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-transparent to-transparent"></div>

              {/* Number */}
              <div className="absolute top-3 left-3 w-[28px] h-[28px] rounded-full bg-[#06B6D4] text-[#FFFFFF] flex items-center justify-center text-[14px] font-arial font-bold">
                {topper.id}
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-3">
                <p className="text-[#FDFCFB] font-georgia font-bold text-[18px]">
                  {topper.name}
                </p>

                <p className="text-[#FFFFFF80] font-georgia text-[12px] mt-1">
                  {topper.course}
                </p>

                <p className="text-[#06B6D4] text-[24px] font-georgia font-bold mt-3">
                  {topper.marks}
                  <span className="text-[#FFFFFF4D] text-[16px] font-georgia">
                    /{topper.total}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Toppers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {otherToppers.map((topper) => (
            <div
              key={topper.id}
              className="h-[60px] rounded-[12px] border border-[#FFFFFF15] bg-[#202A3E] px-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-[45px] h-[45px] rounded-full object-cover grayscale"
                />

                <div>
                  <p className="text-[#FDFCFB] text-[16px] font-georgia font-bold">
                    {topper.name}
                  </p>

                  <p className="text-[#FFFFFF66] text-[12px] mt-1">
                    {topper.course}
                  </p>
                </div>
              </div>

              <p className="text-[#06B6D4] text-[20px] font-georgia font-bold">
                {topper.marks}
                <span className="text-[#FFFFFF40] text-[14px] font-georgia font-normal">
                  /{topper.total}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center">
          <a className="text-[#9CA3AF] text-[12px] font-inter font-medium tracking-[1px] flex items-center gap-2">
            VIEW ALL HALL OF FAME
            <ArrowUpRight className="" size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Toppers;
