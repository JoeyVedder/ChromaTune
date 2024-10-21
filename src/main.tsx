import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Default from "/src/Pages/Default/Default.tsx";
// import New from "/src/Pages/New/New.tsx";
// import History from "/src/Pages/History/History.tsx";
// import Settings from "/src/Pages/Settings/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Default />,
      },
      {
        path: "/New",
        element: <New />,
      },
      {
        path: "/History",
        element: <History />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);