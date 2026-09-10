function Button({ children, className }) {
  return (
    <button
      className={`
        h-[42px]
        px-5
        bg-[#06B6D4]
        text-white
        rounded-full
        flex
        items-center
        justify-center
        gap-2
        text-[11px]
        font-bold
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
