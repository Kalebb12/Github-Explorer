import { FaGithubSquare } from "react-icons/fa";
import SearchIcon from "../../svg/search";
import { useDispatch } from "react-redux";
import Button from "../../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [username, setUserName] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    // dispatch({type:"user/startFetch"})
    // const user = await getUserinfo(username)
    // const repo = await getUserRepo(username)
    // if(!user) return
    // dispatch({ type: "user/getUser", payload: {user,repo} })
    setIsLoading(true)
    setUserName("") // Clear the input field after submission
    setIsLoading(false)
    return navigate("/user/"+username)
  }

  const [isLoading , setIsLoading] = useState(false)

  return (
    <div className="flex flex-col gap-5 text-center h-[300px] bg-slate-800 text-[#f5f5f5] p-10 rounded-2xl">
      <FaGithubSquare size={80} className="mx-auto" />
      <div className="flex flex-col gap-3">
        <span className="text-[32px] font-bold">Github Explorer</span>
        <span className="font-medium text-[18px]">
          Enter a GitHub username to view their profile and repositories
        </span>
        <form className="flex items-center gap-3" onSubmit={handleSubmit}>
          <label className="flex items-center w-full gap-2 input input-bordered">
            <input type="text" required className="w-full" name="username" placeholder="Search" value={username} onChange={(e)=>setUserName(e.target.value)} />
            <SearchIcon />
          </label>
          <Button loading={isLoading}/>
        </form>
      </div>
    </div>
  );
};

export default Main;
