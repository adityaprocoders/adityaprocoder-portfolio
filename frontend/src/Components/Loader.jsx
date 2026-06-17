const Loader = ({ size = "w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" }) => {
  return (
    <div className="flex justify-center items-center w-full min-h-[200px] p-4">
      {/* Parent Container: responsive size class ke saath */}
      <div className={`relative flex justify-center items-center ${size}`}>
        
        {/* Outer Ring */}
        <span className="absolute w-full h-full rounded-full border-[3px] md:border-4 border-t-[#00B4D8] border-r-[#00B4D8] border-b-transparent border-l-transparent animate-spin"></span>
        
        {/* Inner Ring */}
        <span className="absolute w-4/6 h-4/6 rounded-full border-[3px] md:border-4 border-l-[#F7941E] border-b-[#F7941E] border-t-transparent border-r-transparent animate-spin-reverse"></span>
        
      </div>
    </div>
  );
};

export default Loader;