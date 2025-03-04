import { useState, useEffect } from "react";

const WindowSizeDisplay = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='flex justify-center items-center text-[45px]  w-[100%] h-[80%] lg:h-[90%] overflow-auto   '>
      <p >Width: {windowSize.width}px</p>
      <p > <br></br> Height:  {windowSize.height}px</p>
    </div>
  );
};

export default WindowSizeDisplay;
