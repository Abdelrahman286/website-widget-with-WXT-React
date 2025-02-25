import React, { useContext } from "react";
import { PersonStanding } from "lucide-react";

// using app context
import { useAppContext } from "./Appcontext";
const FloatingIcon = () => {
  const { isOpened, setIsOpened } = useAppContext();
  return (
    <div
      onClick={() =>
        setIsOpened((current) => {
          return !current;
        })
      }
      className="ltr-important flex justify-center items-center 
      w-[56px] h-[56px] rounded-full 
      bg-gradient-to-br from-blue-500 to-blue-700
      border-[3px] border-white shadow-lg shadow-blue-300/50 
      hover:shadow-xl hover:scale-105 
      transition-all duration-300 cursor-pointer active:scale-95 !self-start"
    >
      <PersonStanding size={28} className="text-white" />
    </div>
  );
};

export default FloatingIcon;
