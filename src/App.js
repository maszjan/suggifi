import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import SuggifiPage from "./pages/Suggifi";
import AboutPage from "./pages/About";
import CreditsPage from "./pages/Credits";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "suggifi", element: <SuggifiPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "credits", element: <CreditsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
