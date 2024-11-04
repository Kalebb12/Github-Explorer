import { useSelector } from "react-redux";
import User from "../../ui/user";
import Repo from "../repo/repo";
import { getUserinfo, getUserRepo } from "../../services/fetcher";
import { useLoaderData } from "react-router-dom";

const UserInfo = () => {
  const { user, repo } = useLoaderData();
  console.log(repo); 
  return (
    <section className="flex flex-col gap-3">
      <User user={user.data} />
       {repo.data.slice(0) &&  <Repo repos={repo.data.slice(0, 9)} />}
    </section>
  );
};

export async function loader({ params }) {
  const user = await getUserinfo(params.username);
  const repo = await getUserRepo(params.username);
  return { user, repo };
}

export default UserInfo;
