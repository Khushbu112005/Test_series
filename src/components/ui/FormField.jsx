function FormField({
  label,
  required,
  id,
  children,
  labelColor = "text-[#536870]",
  className = "",
  colSpan = "",
}) {
  return (
    <div className={`flex flex-col gap-2 ${colSpan}`}>
      <label
        htmlFor={id}
        className={`${className} font-dm-sans font-bold text-base ${labelColor} dark:text-slate-300`}
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {children}
    </div>
  );
}

export default FormField;
