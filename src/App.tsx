// In your main App.js or similar entry file
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import Home from "./components/Home";
import DashboardLayout from "./components/dashboard/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
