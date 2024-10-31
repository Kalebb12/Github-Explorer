import { FaGithubSquare } from "react-icons/fa";
import SearchIcon from "../../svg/search";
const Main = () => {
  return (
    <div className="flex flex-col gap-5 text-center h-[300px] bg-slate-800 text-[#f5f5f5] p-10 rounded-2xl">
      <FaGithubSquare size={80} className="mx-auto" />
      <div className="flex flex-col gap-3">
        <span className="text-[32px] font-bold">Github Explorer</span>
        <span className="font-medium text-[18px]">
          Enter a GitHub username to view their profile and repositories
        </span>
        <form className="flex items-center gap-3">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="w-full" placeholder="Search" />
            <SearchIcon />
          </label>
          <button className="btn bg-blue-700 font-medium hover:bg-blue-800">
            search
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
