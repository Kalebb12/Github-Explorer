import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation()
  const loading = navigation.state === 'loading'

  return (
    <main className="flex flex-col items-center justify-center w-full gap-4 px-5 py-4">
      {loading && <Loader/>}
      <Outlet/>
    </main>
  );
};

export default AppLayout;
