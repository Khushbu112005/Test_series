function CustomSelect({ id, options, error, ...props }) {
  return (
    <select
      id={id}
      {...props}
      className={`w-full h-[42px] pl-10 pr-9 text-[14px] text-[#102B3B] dark:text-slate-100 border rounded-md outline-none appearance-none bg-white dark:bg-[#111B2C] focus:ring-1 focus:ring-[#06B6D4] focus:border-[#06B6D4] ${error ? "border-red-500" : "border-[#DCE3E5] dark:border-slate-600"}
      `}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
