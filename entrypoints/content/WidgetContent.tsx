import React, { useState, useEffect } from "react";
import { X, RotateCw } from "lucide-react";
import { buttons } from "./Buttons";
import { styles } from "./styles";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppContext } from "./Appcontext";

const STYLE_ID = "accessibility-styles";

const WidgetContent: React.FC = () => {
  const { setIsOpened, activeStyles, setActiveStyles } = useAppContext();

  const updateGlobalStyle = () => {
    let styleTag = document.getElementById(STYLE_ID) as HTMLStyleElement;
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = STYLE_ID;
      document.head.appendChild(styleTag);
    }

    const appliedStyles = Object.entries(activeStyles)
      .filter(([_, level]) => level > 0)
      .map(([key, level]) => styles[key][level - 1])
      .join("\n");

    styleTag.innerHTML = appliedStyles;
  };

  useEffect(() => {
    updateGlobalStyle();
  }, [activeStyles]);

  const toggleStyle = (key: string) => {
    setActiveStyles((prev) => {
      const currentLevel = prev[key] || 0;
      const maxLevel = styles[key].length;
      const nextLevel = (currentLevel + 1) % (maxLevel + 1);
      return { ...prev, [key]: nextLevel };
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="ltr-important w-[350px] h-[500px] bg-white shadow-2xl rounded-2xl flex flex-col items-center p-4 relative"
    >
      <TooltipProvider>
        {/* Close Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpened(false)}
            >
              <X size={24} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Close Widget</p>
          </TooltipContent>
        </Tooltip>

        {/* Reset Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-800"
              onClick={() => setActiveStyles({})}
            >
              <RotateCw size={24} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reset Styles</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-6">
        Text Adjustments
      </h2>

      <div className="grid grid-cols-2 gap-4 w-full">
        {buttons.map(({ name, icon: Icon, key, color }: any) => {
          const levels = styles[key].length;

          return (
            <button
              key={key}
              className={`flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-gray-200 transition border-2 ${
                activeStyles[key] ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => toggleStyle(key)}
            >
              <Icon size={28} className={color} />
              <span className="text-sm font-medium text-gray-700 mt-2">
                {name}
              </span>
              <div className="flex mt-1 space-x-1">
                {Array.from({ length: levels }, (_, i) => i + 1).map(
                  (level) => (
                    <span
                      key={level}
                      className={`w-2 h-2 rounded-full ${
                        activeStyles[key] === level
                          ? "bg-gray-900"
                          : "bg-gray-300"
                      }`}
                    ></span>
                  )
                )}
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WidgetContent;
