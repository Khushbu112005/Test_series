function SectionHeading({
  title,
  subtitle = "",
  highlight = "",
  subtitleColor = "text-[#111111]",
  highlightColor = "text-[#06B6D4]",
}) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <p className="w-4 sm:w-5 h-px bg-[#06B6D4] shrink-0"></p>
        <span className="text-[#06B6D4] font-inter text-[10px] sm:text-[12px] font-semibold tracking-[2px] sm:tracking-widest">
          {title}
        </span>
      </div>

      <h1
        className={`w-full max-w-full sm:max-w-[500px] font-georgia font-bold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[1.15] sm:leading-[1.2] ${subtitleColor} dark:text-slate-100`}
      >
        <span className="block">{subtitle}</span>
        <span className={`block ${highlightColor}`}>{highlight}</span>
      </h1>
    </div>
  );
}

export default SectionHeading;
