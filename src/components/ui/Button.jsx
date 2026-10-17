const variants = {
  primary: "bg-[#06B6D4] text-[#FFFFFF]",
  white: "bg-[#FFFFFF] text-[#0891B2]",
  transparent:
    "bg-[#FFFFFF]/20 border border-white/30 text-[#FFFFFF] dark:border-[#06B6D4]",
  outline: "border border-[#E2E8F0] text-[#101F3C] hover:bg-slate-50",
};

function Button({ children, className, variant = "primary", ...props }) {
  return (
    <button
      {...props}
      className={`${variants[variant]} rounded-full flex items-center justify-center gap-2 text-[14px] tracking-wide font-arial font-bold ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
