// In your main App.js or similar entry file
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import Home from "./components/Home";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import HomePage from "./components/dashboard/HomePage";
import Resume from "./components/dashboard/Resume";
import SignIn from "./components/auth/Login";
import Register from "./components/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "cover-letter",
        element: <div>Cover Letter</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
