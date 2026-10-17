import SectionHeading from "./SectionHeading";

function Process() {
  const steps = [
    {
      number: "1",
      title: "Download PDF",
      description: "Get the question paper from your My Purchase tab",
    },
    {
      number: "2",
      title: "Handwrite",
      description: "Attempt in notebooks exactly as in the exam hall",
    },
    {
      number: "3",
      title: "Scan & Upload",
      description: "Submit as PDF through our platform in seconds",
    },
    {
      number: "4",
      title: "Expert Feedback",
      description: "Evaluated by qualified faculty with detailed comments",
    },
  ];

  return (
    <section className="bg-[#F8F7F5] dark:bg-[#1B2335] p-6 py-12 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-32 lg:py-16">
      <div className="wide-screen-content flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-10">
        {/* Heading */}
        <SectionHeading
          title="PROCESS"
          subtitle="How It Works."
          subtitleColor="text-[#111111]"
        />

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-y-10 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`${index !== 0 ? "lg:px-6" : ""} ${index !== 0 ? "lg:border-l" : ""} ${index % 2 !== 0 && "md:px-6 md:border-l"} border-[#E5E7EB] dark:border-slate-700`}
            >
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-3">
                <p className="font-georgia text-[#C9C9C9] dark:text-slate-600 text-[36px] sm:text-[38px] md:text-[40px] lg:text-[48px] font-bold leading-none">
                  {step.number}
                </p>

                <h3 className="font-inter text-[#111111] dark:text-slate-100 text-[16px] sm:text-[17px] md:text-[17px] lg:text-[20px] font-bold">
                  {step.title}
                </h3>

                <p className="text-[#9CA3AF] text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] leading-[1.6] w-full sm:max-w-[280px] md:max-w-[250px] lg:w-[220px]">
                  {step.description}
                </p>
                <div
                  className={`${index !== 3 && "border-b border-gray-200 dark:border-slate-700 md:hidden"}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
