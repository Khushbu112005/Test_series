import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

function GetInTouch() {
  return (
    <section className="bg-[#171F31] dark:bg-[#0F172AF2] p-6 lg:px-32 py-16">
      <div className="wide-screen-content grid grid-cols-1 lg:grid-cols-3 gap-20">
        {/* Left Content */}
        <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-1">
          <div className="flex items-center gap-4">
            <span className="w-[20px] h-[1px] bg-[#06B6D4]"></span>

            <p className="text-[#06B6D4] text-[12px] font-semibold tracking-[1.5px]">
              GET IN TOUCH
            </p>
          </div>

          <h2 className="font-georgia font-bold text-[30px] leading-[1.2] text-white">
            Start Your
            <p className="text-[#06B6D4]"> Journey.</p>
          </h2>

          <p className="text-[#9CA3AF] text-[16px] leading-[1.7] w-full max-w-[320px]">
            Drop your query and we'll guide you to the right package for your
            preparation stage.
          </p>

          <div className="flex flex-col gap-2">
            <p className="text-[#9CA3AF] text-[14px]">+91 7710889336</p>

            <p className="text-[#9CA3AF] text-[14px]">
              team@charteredstudies.org
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5 lg:col-span-2 max-w-[690px] lg:pl-10">
          {/* Full Name */}
          <div>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full bg-transparent border-0 border-b border-[#FFFFFF50] outline-none text-[#FFFFFF80] text-[14px] pb-4"
            />
          </div>

          {/* Mobile */}
          <div>
            <input
              type="text"
              id="mobile"
              placeholder="Mobile No"
              className="w-full bg-transparent border-0 border-b border-[#FFFFFF50] outline-none text-[#FFFFFF80] text-[14px] pb-4"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-0 border-b border-[#FFFFFF50] outline-none text-[#FFFFFF80] text-[14px] pb-4"
            />
          </div>

          {/* Query */}
          <div>
            <textarea
              rows="2"
              id="query"
              placeholder="Your Query"
              className="w-full bg-transparent border-0 border-b border-[#FFFFFF50] outline-none resize-none text-[#FFFFFF80] text-[14px] pb-8"
            ></textarea>
          </div>

          {/* Button */}
          {/* <button className="w-full bg-[#06B6D4] text-white rounded-full py-3 text-[9px] font-semibold flex items-center justify-center gap-3">
           
          </button> */}
          <Button variant="primary" className="tracking-wide px-5 py-3">
            Send Message
            <ArrowUpRight size={11} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
