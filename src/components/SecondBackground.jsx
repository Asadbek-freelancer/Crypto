import React from "react";
const SecondBackground = () => {
    return (
      <div className="absolute inset-0 bg-black overflow-hidden z-0">
        {/* Градиенты */}
        <div className="absolute left-[-10%] top-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-600 via-red-500 to-black blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute right-[-10%] top-0 w-80 h-80 sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-blue-500 via-purple-600 to-black blur-[100px] opacity-40 animate-pulse"></div>
  
        {/* Сетка линий */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <svg className="w-full h-full animate-spin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2" opacity="0.4"></path>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"></rect>
          </svg>
        </div>
  
        {/* Декоративная звезда */}
        <div className="absolute top-1/3 right-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-white rotate-45 animate-bounce"></div>
      </div>
    );
  };
  
  export default SecondBackground;