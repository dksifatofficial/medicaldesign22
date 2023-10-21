const TextareaComponent = ({ placeholder, type, value, onChange }) => {
    return (
      <div className="relative">
        <textarea
          className="border placeholder-gray-400 focus:outline-none focus:border-black resize-none
          whitespace-pre-line w-full h-[170px] pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-sm block
          border-gray-300 rounded-sm bg-gray-100"
          placeholder={placeholder}
          type={type || "text"}
          value={value}
          onChange={onChange}
          style={{ whiteSpace: 'pre-line' }}
        ></textarea>
      </div>
    );
  };
  
  export default TextareaComponent;
  