function PolicyLayout({ number, title, children }) {
  return (
    <main className="bg-white dark:bg-[#050F1A] py-8">
      <div>
        {/* Heading */}
        <div className="flex items-center gap-2">
          <span className="text-[48px] font-bold leading-none text-[#C5ECF3]">
            {number}
          </span>

          <h2 className="text-[20px] font-inter font-bold text-[#172033] dark:text-slate-100 mt-7">
            {title}
          </h2>
        </div>

       {/* Children */}
        <div className="mt-2 text-[14px] font-inter leading-relaxed text-[#4A5565] dark:text-slate-300">
          {children}
        </div>
      </div>
    </main>
  );
}

export default PolicyLayout;
