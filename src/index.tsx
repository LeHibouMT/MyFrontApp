import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "components/App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="*"
      element={<App />}
    />
  ),
  // future flags for react-router-dom
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    }
  }
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
