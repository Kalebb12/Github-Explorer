import { useSelector } from "react-redux";
import User from "../../ui/user";
import Repo from "../repo/repo";

const UserInfo = () => {
  const { user ,repo} = useSelector((store) => store.user);
  console.log(repo.data);
  if (user.data) {
    return (
      <section className="flex flex-col gap-3">
        <User user={user.data} />
        <Repo repos={repo.data.slice(0,9)}/>
      </section>
    );
  }
};

export default UserInfo;
