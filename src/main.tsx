import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VotingPage from "./Pages/VotingPage/VotingPage";
import AdminPage from "./Pages/AdminPage/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/VotingPage",
    element: <VotingPage />,
  },
  {
    path: "/dashboard",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
