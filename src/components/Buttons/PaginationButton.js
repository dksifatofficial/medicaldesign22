const PaginationButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} hover:bg-[#27916c] text-sm font-semibold text-black 
       hover:text-white py-2 px-4`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
