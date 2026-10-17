import SectionHeading from "./SectionHeading";

function Promise() {
  const commitments = [
    {
      number: "01",
      title: "Ex-Examiners",
      description:
        "Papers prepared by people who have actually set ICAI papers — same difficulty, same language, same precision.",
    },
    {
      number: "02",
      title: "100% Syllabus",
      description:
        "PYQs, RTPs, MTPs — every part of the ICAI module tested exhaustively before the actual exam.",
    },
    {
      number: "03",
      title: "Live Guidance",
      description:
        "Live sessions on study technique, revision strategy and exam day approach — unique to Chartered Studies.",
    },
    {
      number: "04",
      title: "Affordable",
      description:
        "Lowest prices in India. Maximum support, minimum cost. Because every student deserves world-class preparation.",
    },
    {
      number: "05",
      title: "Mentoring",
      description:
        "A hand-holding support system throughout your journey. Quick WhatsApp support so you're never stuck.",
    },
    {
      number: "06",
      title: "CSR Initiative",
      description:
        "Concessions and scholarships for students from low-income families or single-parent households.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#050F1A] p-6 lg:px-32 py-16">
      <div className="wide-screen-content flex flex-col gap-14">
        {/* Heading */}
        {/* <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="w-[20px] h-[1px] bg-[#06B6D4]"></span>

            <p className="text-[#06B6D4] text-[8px] font-semibold tracking-[1.5px]">
              WHY CHOOSE US
            </p>
          </div>

          <h2 className="font-georgia font-bold text-[30px] leading-[1.2] text-[#111111]">
            Our Promise.
            <br />
            <span className="text-[#06B6D4]">Six Commitments.</span>
          </h2>
        </div> */}
        <SectionHeading
          title="WHY CHOOSE US"
          subtitle="Our Promise."
          highlight="Six Commitments"
          subtitleColor="text-[#111111]"
          highlightColor="text-[#06B6D4]"
        />

        {/* Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-14 max-w-[1250px]">
          {commitments.map((commitment) => (
            <div
              key={commitment.number}
              className="grid grid-cols-[80px_1fr] gap-4"
            >
              {/* Number */}
              <p className="text-[#E8E6E3] dark:text-[#263247] text-[64px] lg:text-[70px] font-bold leading-none">
                {commitment.number}
              </p>

              {/* Content */}
              <div className="flex flex-col mt-1">
                <h3 className="text-[#111111] dark:text-slate-100 text-[22px] lg:text-[24px] font-bold leading-tight">
                  {commitment.title}
                </h3>

                <p className="mt-2 text-[#9CA3AF] text-[15px] lg:text-[16px] leading-[1.7] max-w-[440px]">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Promise;
