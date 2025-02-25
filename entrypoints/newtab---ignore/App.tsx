import { Button } from "@/components/ui/button";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default () => {
  const handleClick = (e: any) => {
    const ele = document.querySelector("body");

    if (ele) {
      ele.style.background = getRandomColor();
    }
  };
  return (
    <div className="p-4 bg-slate-300 text-center flex flex-col h-full w-full">
      <h2 className="text-3xl py-4"> New Tab Page</h2>
      <Button onClick={handleClick}>Change Bacground color</Button>
    </div>
  );
};
