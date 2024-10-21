import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Default from "./Pages/Default/Default";
import New from "./Pages/New/New";
import History from "./Pages/History/History";
import Settings from "./Pages/Settings/Settings";

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

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}