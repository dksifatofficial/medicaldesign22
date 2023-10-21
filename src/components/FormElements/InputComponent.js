const InputComponent = ({ placeholder, type, value, onChange }) => {
  return (
    <div className="relative">
      <input
        className="border placeholder-gray-400 focus:outline-none focus:border-black
          w-full pt-3 pr-4 pb-3 pl-4 mr-0 mt-0 ml-0 text-sm block bg-gray-100 border-gray-300 rounded-sm"
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputComponent;
