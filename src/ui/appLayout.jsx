import UserInfo from "../features/user/userInfo"
import Main from "../features/main/main";

const AppLayout = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-4 px-5 py-4 overflow-scroll">
      <Main/>
      <UserInfo/>
    </main>
  );
};

export default AppLayout;
