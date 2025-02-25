import { X, Type, Bold, TextQuote, Contrast } from "lucide-react";
export const buttons = [
  {
    name: "Bigger Font",
    icon: Type,
    key: "biggerFont",
    color: "text-blue-500",
  },
  { name: "Bold", icon: Bold, key: "boldText", color: "text-green-500" },
  {
    name: "Line Height",
    icon: TextQuote,
    key: "lineHeight",
    color: "text-yellow-500",
  },
  {
    name: "Gray Scale",
    icon: Contrast,
    key: "highContrast",
    color: "text-red-500",
  },
];
