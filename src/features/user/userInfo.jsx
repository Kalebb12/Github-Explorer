import { FaGithub } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { data: user } = useSelector((store) => store.user.user);
  console.log(user);
  if (user) {
    return (
      <div className="bg-slate-800 flex gap-5 items-center w-[70%] py-10 px-5 mx-auto text-[#f5f5f5] rounded-2xl">
        <img
          src={user.avatar_url}
          alt={user.name + " profile"}
          className="w-[170px] rounded-full"
        />
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-[24px] font-bold">{user.name}</span>
            <br />
            <span className="text-slate-400">@{user.login}</span>
          </div>
          <span>{user.bio}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <MdLocationOn /> {user.location || "No Location Provided"}
            </span>
            <a
              className="flex gap-1 items-center"
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={14} /> <span>View Github</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span>
              <b>{user.public_repos}</b> repositories
            </span>
            <span>
              <b>{user.following}</b> following
            </span>
            <span>
              <b>{user.followers}</b> followers
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default UserInfo;