import { Svg } from "../svg";
import glass from "../../icons/glass.svg";

export const Searcher = () => {
  return (
    <div className="bg-gray rounded-full px-4 py-2 items-center gap-2 text-slate-500 flex-1 hidden sm:flex">
      <Svg path={glass} />
      <input className="bg-gray w-full" placeholder="Search for products..." />
    </div>
  );
};
