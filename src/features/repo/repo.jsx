import { BsStarFill } from "react-icons/bs";
import { FaCodeFork } from "react-icons/fa6";

const Repo = ({ repos }) => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-3 py-4 sm:grid-cols-2 md:grid-cols-3">
        {repos.map((repo, i) => {
          return (
            <div
              className="flex flex-col gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-400"
              key={i}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] font-bold text-blue-300"
              >
                {repo.name}
              </a>
              <span className="">{repo.description}</span>
              <div className="flex items-center justify-between">
                <span>{repo.language}</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <BsStarFill /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCodeFork /> {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repo;
