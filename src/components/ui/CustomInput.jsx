function CustomInput({ error, className = "", ...props }) {
  return (
    <div>
      <input
        {...props}
        className={`w-full px-4 py-6 border border-gray-300 font-asul rounded-lg text-[14px] focus:outline-none focus:ring-1
        focus:ring-[#06B6D4] focus:border-[#06B6D4] transition-colors bg-white dark:bg-[#111B2C] dark:border-slate-600 dark:text-slate-100 placeholder:text-slate-400 ${className}`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default CustomInput;
