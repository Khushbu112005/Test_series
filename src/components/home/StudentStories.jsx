import { Play, ArrowUpRight } from "lucide-react";

import y1 from "../../assets/images/y1.jpg";
import y2 from "../../assets/images/y2.jpg";
import y3 from "../../assets/images/y3.jpg";
import y4 from "../../assets/images/y4.jpg";
import SectionHeading from "./SectionHeading";

function StudentStories() {
  const stories = [
    {
      image: y1,
      name: "Diya Shah — AIR Rank Holder",
      course: "CA Intermediate · 471/600",
      result: "Prime Plus+",
    },
    {
      image: y2,
      name: "Arnav Mukharjee — 86.3% in Foundation",
      course: "CA Foundation · 345/400",
      result: "86.3% in Foundation",
    },
    {
      image: y3,
      name: "Prachi Chopra — Intermediate Topper",
      course: "CA Intermediate · 370/600",
      result: "Prime Plus+",
    },
    {
      image: y4,
      name: "Moli Singhal — Study Strategy",
      course: "CA Intermediate · 351/600",
      result: "Prime Plus+",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#050F1A] p-6 lg:px-32 py-16">
      <div className="wide-screen-content flex flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          {/* <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="w-[20px] h-[1px] bg-[#06B6D4]"></span>

              <p className="text-[#06B6D4] text-[8px] font-semibold tracking-[1.5px]">
                STUDENT STORIES
              </p>
            </div>

            <h2 className="w-60 font-georgia font-bold text-[30px] leading-[1.2] text-[#111111]">
              Hear It From
              <span className="text-[#06B6D4]"> Our Students.</span>
            </h2>
          </div> */}

          <SectionHeading
            title="STUDENT STORIES"
            subtitle="Hear It From"
            highlight="Our Students."
            subtitleColor="text-[#111111]"
            highlightColor="text-[#06B6D4]"
          />

          <p className="lg:w-[230px] lg:text-right text-[#94A3B8] text-[16px] leading-[1.7]">
            Real stories from real students who cleared their exams with
            Chartered Studies.
          </p>
        </div>

        {/* Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {stories.map((story) => (
            <div
              key={story.name}
              className="relative h-[300px] rounded-[12px] overflow-hidden bg-[#111111]"
            >
              {/* Background image */}
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* YouTube badge */}
              <div className="absolute top-3 right-3 bg-[#FF0000] text-[#FFFFFF] rounded-full px-3 py-1 text-[12px] font-arial font-bold">
                YouTube
              </div>

              {/* Play button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-[#06B6D4] text-[#FFFFFF] flex items-center justify-center">
                <Play size={25} fill="currentColor" />
              </button>

              {/* Bottom content */}
              <div className="absolute bottom-4 left-4">
                <p className="text-[#FFFFFF] font-georgia font-bold text-[18px]">
                  {story.name}
                </p>

                <p className="text-[#FFFFFF80] text-[12px] mt-1">
                  {story.course}
                </p>

                {/* <span className="inline-block mt-1 bg-[#166534CC] text-[#86EFAC] px-2 py-1 text-[8px] font-semibold">
                  {story.result}
                </span> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center">
          <a className="text-[#9CA3AF] text-[12px] font-inter font-medium tracking-[1px] flex items-center gap-1">
            VIEW ALL ON YOUTUBE
            <ArrowUpRight className="" size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StudentStories;
