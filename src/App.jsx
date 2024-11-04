import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/appLayout";
import Main from "./features/main/main";
import Profile from "./ui/Profile";
import { loader } from "./features/user/userInfo";
import Error from "./ui/Error";

function App() {
  const router = createBrowserRouter([
    {
      errorElement:<Error/>,
      element: <AppLayout />,
      children: [
        {
          element: <Main />,
          path: "/",
          errorElement: <Error />,
        },
        {
          element: <Profile />,
          errorElement: <Error />,
          path: "/user/:username",
          loader: loader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
