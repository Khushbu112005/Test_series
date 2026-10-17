import { Clock, Play, RotateCcw, ChevronDown, Search } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import { endpoints } from "../services/quizService";

function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const filters = [
    {
      name: "course",
      label: "All courses",
      options: ["CA", "CMA", "CS"],
    },
    {
      name: "level",
      label: "All levels",
      options: ["Foundation", "Intermediate", "Executive", "Professional"],
    },
  ];

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await endpoints.getQuizzes();
        const quizData = response.data.data.quizzes;

        setQuizzes(quizData);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        setError("Failed to load quizzes.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) {
    return <p>Loading quizzes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      {/* Hero */}
      <PageHero
        breadcrumb="Quiz"
        containerClassName="wide-screen-content"
        title={
          <div className="">
            Short <span className="text-[#A2F4FD]">quizzes.</span>
            <p className="text-nowrap">Instant feedback.</p>
          </div>
        }
        titleClassName="text-[38px] leading-[0.98] min-[375px]:text-[42px] sm:text-[52px] md:text-[60px] lg:max-w-[1000px] lg:text-[72px] lg:leading-[0.95]"
        description="Chapter-level MCQ sets you can finish between lectures. No fee, no enrolment — your scores are saved so you can see what is actually sticking."
        descriptionClassName="w-full max-w-xl text-[14px] sm:text-[15px]"
      >
        <div className="flex lg:justify-end">
          <div className="w-[210px] h-fit bg-[#363D4C] rounded-[4px] px-4 py-4">
            <div className="flex flex-col gap-3">
              <p className="text-[#FFFFFF80] text-[11px] font-inter font-bold tracking-[2px]">
                YOUR PRACTICE
              </p>

              <p className="text-[#FFFFFF] text-[30px] font-inter font-bold">
                6
                <span className="text-[#FFFFFF66] text-[18px]">
                  /{quizzes.length}
                </span>
                <span className="text-[#FFFFFF80] text-[18px] font-normal ml-1">
                  quizzes
                </span>
              </p>

              <div className="h-[3px] bg-[#FFFFFF20] rounded-full">
                <div className="h-full w-[23%] bg-[#06B6D4] rounded-full"></div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="text-[#FFFFFF80] text-[7px] tracking-[1px]">
                    AVG SCORE
                  </p>
                  <p className="text-[#06B6D4] text-[14px] font-bold">74%</p>
                </div>

                <div>
                  <p className="text-[#FFFFFF80] text-[7px] tracking-[1px]">
                    DAY STREAK
                  </p>
                  <p className="text-[#06B6D4] text-[14px] font-bold">6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Retake Quiz */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-6 sm:py-8 lg:py-10 bg-white dark:bg-[#07121E]">
        <div className="wide-screen-content bg-[#1B2335] rounded-[8px] px-5 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[#22C3E6] text-[11px] font-dm-sans font-semibold tracking-[1.5px]">
              PICK UP WHERE YOU LEFT OFF
            </p>

            <p className="text-[#FFFFFF] text-[24px] font-dm-sans font-bold">
              Taxation Basics
            </p>

            <p className="text-[#FFFFFF99] font-dm-sans text-[14px]">
              Taxation · 30 questions · best score 62%
            </p>
          </div>

          <Button variant="primary" className="px-5 py-3">
            Retake quiz
            <RotateCcw size={14} className="text-[#FFFFFF] font-bold" />
          </Button>
        </div>
      </div>

      {/* Quiz List */}
      <div className="bg-[#F4F3EF] dark:bg-[#050F1A] px-4 sm:px-8 md:px-16 lg:px-28 py-6 sm:py-8 lg:py-10">
        {/* Filters + Search */}
        <div className="wide-screen-content flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            {filters.map((filter) => (
              <div className="relative w-full sm:w-auto" key={filter.name}>
                <select
                  name={filter.name}
                  className="w-full sm:w-[135px] appearance-none bg-[#FFFFFF] dark:bg-[#1B2335] border border-[#E2E8F0] dark:border-slate-600 rounded-full px-4 py-3 pr-8 outline-none cursor-pointer font-inter font-medium text-[14px] text-[#5A6577] dark:text-slate-200"
                >
                  <option value="">{filter.label}</option>

                  {filter.options.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={13}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748B]"
                />
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="w-full lg:w-[180px] bg-[#FFFFFF] dark:bg-[#1B2335] border border-[#E2E8F0] dark:border-slate-600 rounded-full px-4 py-3 flex items-center gap-2">
            <Search size={13} className="text-[#94A3B8] shrink-0" />

            <input
              type="text"
              placeholder="Search batches or mentors"
              className="w-full min-w-0 bg-transparent outline-none text-[10px] text-slate-900 dark:text-slate-100 placeholder:text-[#94A3B8]"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="wide-screen-content flex items-center justify-between mt-8 sm:mt-10 border-b border-[#E2E8F0] dark:border-slate-700 pb-4">
          <h2 className="text-[#1E293B] dark:text-slate-100 text-[14px] font-bold">
            All quizzes
          </h2>

          <p className="text-[#64748B] dark:text-slate-400 text-[9px]">
            {quizzes.length} quizzes
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="wide-screen-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {quizzes.length === 0 ? (
            <p>No quizzes available.</p>
          ) : (
            quizzes.map((quiz) => (
              <div
                key={quiz.quiz_id}
                className="min-h-[175px] bg-white dark:bg-[#1B2335] border border-[#E2E8F0] dark:border-slate-700 rounded-[10px] px-4 py-4 flex flex-col justify-between shadow-sm"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-[#0E9CBD] text-[11px] font-dm-sans font-bold tracking-[1.5px]">
                    {quiz.category ?? ""}
                  </p>

                  <p className="text-[#101F3C] dark:text-slate-100 font-dm-sans text-[18px] font-bold">
                    {quiz.quiz_title}
                  </p>

                  <div className="flex items-center gap-4 font-dm-sans text-[#5A6577] dark:text-slate-300 text-[12px]">
                    <span>{quiz.questions ?? 0} questions</span>

                    <span className="inline-flex items-center gap-1">
                      <Clock size={10} />
                      {quiz.time ?? "N/A"}
                    </span>
                  </div>
                </div>

                {quiz.attempted ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[8px]">
                      <span className="text-[#8E97A6] font-dm-sans text-[12px]">
                        Best score
                      </span>

                      <span className="text-[#101F3C] dark:text-slate-100 font-dm-sans text-[12px] font-bold">
                        {quiz.score}
                      </span>
                    </div>

                    <div className="h-[3px] bg-[#E2E8F0] dark:bg-slate-700 rounded-full">
                      <div className="w-[78%] h-full bg-[#0891B2] rounded-full"></div>
                    </div>

                    <Button className="px-5 py-2">
                      <Play size={10} fill="currentColor" />
                      Retake
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <p className="text-[#8E97A6] font-dm-sans text-[12px]">
                      Not attempted yet
                    </p>

                    <Button className="px-5 py-2">
                      <Play size={10} fill="currentColor" />
                      Start now
                    </Button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Quiz;
