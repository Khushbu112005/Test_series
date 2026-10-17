import logo from "../../assets/images/logo.png";

function AuthLayout({
  auth,
  leftLabel,
  leftTitle,
  leftDescription,
  leftStepTitle,
  leftStepDescription,
  titleLabel,
  title,
  description,
  formContent,
  className = "",
  footerContent,
}) {
  return (
    <section
      className={`auth-layout-background min-h-screen bg-gradient-to-r from-[#EEF7F4] via-[#F9FBF8] to-[#EFF8F5] dark:bg-[#000B15] dark:bg-none`}
    >
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 gap-4 px-4 py-4 sm:px-8 sm:py-8 lg:grid-cols-10 lg:gap-0 lg:px-12 lg:py-10 xl:px-20 2xl:px-30">
        {/* Left Part */}
        <div className="lg:col-span-4">
          <div className="relative h-full overflow-hidden rounded-3xl bg-[#0D2535] shadow-lg lg:rounded-r-none lg:rounded-l-3xl">
            <div
              className={`relative z-10 flex h-full flex-col gap-1 p-6 sm:p-10 md:p-12 xl:p-16 2xl:p-20 ${className}`}
            >
              <p className="text-[#06B6D4] font-bold font-dm-sans text-[11px] tracking-[2px]">
                {leftLabel}
              </p>

              <h1 className="mt-4 w-70 font-times text-[38px] font-bold leading-tight text-white sm:mt-6 sm:text-[46px] lg:text-[52px] 2xl:text-[55px]">
                {leftTitle}
              </h1>

              <p className="mt-4 max-w-[350px] font-dm-sans text-[14px] leading-6 text-[#B6C7CA] sm:mt-6 sm:text-[15px]">
                {leftDescription}
              </p>

              <div className="mt-6 w-full max-w-[350px] border-t border-[#334155]" />

              {auth && (
                <div className="flex gap-2 mt-4">
                  <span className="text-[#06B6D4] font-georgia text-[13px] font-bold">
                    01
                  </span>

                  <div className="flex flex-col gap-1">
                    <p className="text-white font-dm-sans text-[13px] font-bold">
                      {leftStepTitle}
                    </p>

                    <p className="text-[#8DA7AB] font-dm-sans text-[12px]">
                      {leftStepDescription}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="lg:col-span-6">
          <div className="h-full rounded-3xl bg-white dark:bg-[#0B1622] shadow-lg lg:rounded-l-none lg:rounded-r-3xl">
            <div className="flex h-full flex-col px-5 py-8 sm:px-10 sm:py-10 md:px-12 lg:px-14 lg:py-12 xl:px-16 2xl:px-20">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Chartered Studies"
                  className="h-[35px] w-[46px]"
                />

                <p className="font-inter text-[18px] font-bold text-[#06B6D4] sm:text-[23px]">
                  Chartered <span className="text-[#111111] dark:text-white">Studies</span>
                </p>
              </div>

              <p className="text-[#06B6D4] text-[11px] font-bold font-dm-sans tracking-[1px] mt-8">
                {titleLabel}
              </p>

              <h1 className="mt-2 font-playfair text-[32px] font-semibold leading-tight text-[#0D2535] dark:text-slate-100 sm:text-[42px]">
                {title}
              </h1>

              <p className="text-[#70818A] dark:text-slate-300 font-dm-sans text-[14px] mt-1">
                {description}
              </p>

              <div className="mt-2 font-dm-sans">{formContent}</div>

              {footerContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
