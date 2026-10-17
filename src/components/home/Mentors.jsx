import M1 from "../../assets/images/M1.jpg";
import M3 from "../../assets/images/M3.jpg";
import M2 from "../../assets/images/M2.jpg";
import SectionHeading from "./SectionHeading";

function Mentors() {
  const mentors = [
    {
      image: M1,
      category: "STUDENT MENTOR",
      name: "Urvashi Mam",
      description:
        "Empowering 10K+ CA aspirants to find their rhythm in numbers.",
    },
    {
      image: M2,
      category: "EXPERT FACULTY",
      name: "CA Harshal Sir",
      description: "Turning complex tax codes into clear, actionable logic.",
    },
    {
      image: M3,
      category: "CAREER CONSULTANT",
      name: "CA Rutuja Mam",
      description:
        "Mentorship is not about teaching; it's about transforming perspective.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#050F1A] p-6 lg:px-32 py-16">
      <div className="wide-screen-content flex flex-col gap-10">
        {/* Heading */}
        {/* <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="w-[20px] h-[1px] bg-[#06B6D4]"></span>

            <p className="text-[#06B6D4] text-[8px] font-semibold tracking-[1.5px]">
              OUR MENTORS
            </p>
          </div>

          <h2 className="font-georgia font-bold text-[30px] leading-[1.2] text-[#111111]">
            The Minds
            <br />
            <span className="text-[#06B6D4]">Behind Your Success.</span>
          </h2>
        </div> */}

        <SectionHeading
          title="OUR MENTORS"
          subtitle="The Minds"
          highlight="Behind Your Success."
          subtitleColor="text-[#111111]"
          highlightColor="text-[#06B6D4]"
        />

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="relative h-[530px] rounded-[14px] overflow-hidden group"
            >
              {/* Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-inter text-[#00BDD6] text-[14px] lg:text-[11.22px] font-semibold tracking-[1px] mb-1">
                  {mentor.category}
                </p>

                <h3 className="text-[#FFFFFF] font-georgia text-[16px] lg:text-[18.69px] font-bold">
                  {mentor.name}
                </h3>

                <p className="font-inter font-normal text-[#FFFFFF] text-[12px] lg:text-[14.69px] leading-[1.6] mt-1 max-w-[300px]">
                  "{mentor.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center items-center gap-1">
          <span className="w-[20px] h-[4px] rounded-full bg-[#06B6D4]"></span>
          <span className="w-[5px] h-[5px] rounded-full bg-[#CBD5E1] dark:bg-slate-600"></span>
          <span className="w-[5px] h-[5px] rounded-full bg-[#CBD5E1] dark:bg-slate-600"></span>
        </div>
      </div>
    </section>
  );
}

export default Mentors;
