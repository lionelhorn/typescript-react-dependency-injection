import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createElement} from "react";
import {createRoot} from "react-dom/client";
import {allRoutes} from "~/allRoutes.gen";
import "./style.css"

const router = createBrowserRouter(allRoutes);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>;
}

createRoot(document.getElementById('root')).render(
 createElement(App),
)