import { BsStarFill } from "react-icons/bs";
import { FaCodeFork } from "react-icons/fa6";

const Repo = ({ repos }) => {
  return (
    <div>
      <div className="grid w-full grid-cols-3 grid-rows-3 gap-3 py-4">
        {repos.map((repo) => {
          return (
              <div className="flex flex-col gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-400">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[24px] font-bold text-blue-400"
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
