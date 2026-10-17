function CustomTextArea({ error, className = "", ...props }) {
  return (
    <div>
      <textarea
        {...props}
        className={`w-full px-3 py-2.5 border border-gray-300 font-dm-sans rounded text-sm resize-none focus:outline-none focus:ring-1
        focus:ring-[#06B6D4] focus:border-[#06B6D4] transition-colors bg-white dark:bg-[#111B2C] dark:border-slate-600 dark:text-slate-100 placeholder:text-slate-400 ${className}`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default CustomTextArea;