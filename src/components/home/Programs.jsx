import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { endpoints } from "../../services/homeService";
import { useState, useEffect } from "react";

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);

  // const programs = [
  //   {
  //     title: "CA PROGRAM · FOUNDATION & INTERMEDIATE",
  //     name: "Chartered Accountancy",
  //     description:
  //       "Teachers with 7-8 years of CPT & Foundation experience prepare and check every test paper. ICAI-level difficulty, result-oriented approach.",
  //     image: "/src/assets/images/p1.jpg",
  //     layout: "left",
  //   },
  //   {
  //     title: "CMA PROGRAM · FOUNDATION & INTERMEDIATE",
  //     name: "Cost & Mgmt. Accountancy",
  //     description:
  //       "Qualified CMA professionals with real teaching experience prepare and check every paper. Exhaustive syllabus coverage.",
  //     image: "/src/assets/images/p2.jpg",
  //     layout: "right",
  //   },
  //   {
  //     title: "CS PROGRAM · FOUNDATION, EXECUTIVE & PROFESSIONAL",
  //     name: "Company Secretary",
  //     description:
  //       "Qualified CA & CS professionals with teaching experience guide you to excellence. Every corner of the module covered.",
  //     image: "/src/assets/images/p3.jpg",
  //     layout: "left",
  //   },
  // ];

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await endpoints.getCourses();
        console.log(response);
        setPrograms(response.data.data);
      } catch (error) {
        console.error("Error fetching courses", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <section>
      {programs.map((program, index) => {
        return (
          <div
            key={program.course_id}
            className={`min-h-[420px] bg-cover bg-center bg-no-repeat sm:min-h-[460px] lg:h-[504px] lg:min-h-0 ${
              index === 0
                ? "bg-[url('/src/assets/images/p1.jpg')]"
                : index === 1
                  ? "bg-[url('/src/assets/images/p2.jpg')]"
                  : "bg-[url('/src/assets/images/p3.jpg')]"
            }`}
          >
            <div
              className={`h-full ${index === 1 ? "bg-gradient-to-l from-[#081126F2] via-[#081126CC] to-transparent" : "bg-gradient-to-r from-[#081126F2] via-[#081126CC] to-transparent"}`}
            >
              <div
                className={`wide-screen-content flex min-h-[420px] items-end p-5 pb-10 pt-10 sm:min-h-[460px] sm:p-8 sm:pb-12 md:px-12 lg:h-full lg:min-h-0 lg:pb-15 ${index === 1 ? "justify-start lg:justify-end" : "justify-start"}`}
              >
                <div
                  className={`w-full lg:w-[430px] flex flex-col gap-4 lg:gap-5 ${index === 1 ? "text-left items-start lg:text-right lg:items-end" : ""}`}
                >
                  <p className="text-[#06B6D4] font-inter text-[10px] text-nowrap sm:text-[12px] font-semibold tracking-[1.5px]">
                    {program.course_name.toUpperCase()}
                  </p>

                  <h2 className="text-white font-georgia font-bold text-[30px] text-nowrap leading-[1.1] sm:text-[38px] lg:text-[42px]">
                    {program.course_name
                      .replace(" (CA)", "")
                      .replace(" (CMA)", "")
                      .replace(" (CS)", "")}
                  </h2>

                  <p className="text-[#FFFFFF99] text-[15px] sm:text-[17px] lg:text-[18px] w-full lg:w-[560px] leading-[1.6] lg:leading-[1.7]">
                    {program.description}
                  </p>

                  <Link to="/test-series">
                    <div className="flex gap-2 hover:gap-6">
                      <button className="w-fit text-[#06B6D4] text-[11px] sm:text-[12px] tracking-[1.5px] flex items-center gap-2">
                        VIEW PACKAGES
                        <span>
                          <ArrowRight size={18} />
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* CA */}
      {/* <div className="h-[400px] bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/p1.jpg')]">
        <div className="h-full bg-gradient-to-r from-[#081126F2] via-[#081126CC] to-transparent">
          <div className="h-full flex items-end p-6 lg:pt-12 lg:pb-16">
            <div className="w-[430px] flex flex-col gap-5">
              <p className="text-[#06B6D4] font-inter text-[12px] font-semibold tracking-[1.5px]">
                CA PROGRAM · FOUNDATION & INTERMEDIATE
              </p>

              <h2 className="text-white font-georgia font-bold text-[42px] text-nowrap">
                Chartered Accountancy
              </h2>

              <p className="text-[#FFFFFF99] text-[18px] w-140 leading-[1.7]">
                Teachers with 7-8 years of CPT & Foundation experience prepare
                and check every test paper. ICAI-level difficulty,
                result-oriented approach.
              </p>

              <button className="w-fit text-[#06B6D4] text-[12px] tracking-[1.5px] flex items-center gap-2">
                VIEW PACKAGES
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* CMA */}
      {/* <div className="h-[504px] bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/p2.jpg')]">
        <div className="h-full bg-gradient-to-l from-[#081126F2] via-[#081126CC] to-transparent">
          <div className="h-full flex items-center justify-end p-6 lg:px-12">
            <div className="w-[430px] flex flex-col items-end text-right gap-5">
              <p className="text-[#06B6D4] text-[12px] font-semibold tracking-[1.5px]">
                CMA PROGRAM · FOUNDATION & INTERMEDIATE
              </p>

              <h2 className="text-white font-georgia font-bold text-[42px] text-nowrap">
                Cost & Mgmt. Accountancy
              </h2>

              <p className="text-[#FFFFFF99] text-[18px] w-150 leading-[1.7]">
                Qualified CMA professionals with real teaching experience
                prepare and check every paper. Exhaustive syllabus coverage.
              </p>

              <button className="w-fit text-[#06B6D4] text-[12px] tracking-[1.5px] flex items-center gap-2">
                VIEW PACKAGES
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* CS */}
      {/* <div className="h-[504px] bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/p3.jpg')]">
        <div className="h-full bg-gradient-to-r from-[#081126F2] via-[#081126CC] to-transparent">
          <div className="h-full flex items-center p-6 lg:px-12">
            <div className="w-[430px] flex flex-col gap-5">
              <p className="text-[#06B6D4] text-[12px] font-semibold tracking-[1.5px]">
                CS PROGRAM · FOUNDATION, EXECUTIVE & PROFESSIONAL
              </p>

              <h2 className="text-white font-georgia font-bold text-[42px] text-nowrap">
                Company Secretary
              </h2>

              <p className="text-[#FFFFFF99] text-[18px] w-140 leading-[1.7]">
                Qualified CA & CS professionals with teaching experience guide
                you to excellence. Every corner of the module covered.
              </p>

              <button className="w-fit text-[#06B6D4] text-[12px] tracking-[1.5px] flex items-center gap-2">
                VIEW PACKAGES
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Programs;
