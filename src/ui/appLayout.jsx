import UserInfo from "../features/user/userInfo"
import Main from "../features/main/main";

const AppLayout = () => {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-screen w-screen px-5">
      <Main/>
      <UserInfo/>
    </main>
  );
};

export default AppLayout;
