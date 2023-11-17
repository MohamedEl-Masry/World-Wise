/*eslint-disable react/prop-types*/
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./pages/Login/Login";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import AppLayout from "./components/AppLayout/AppLayout";
import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import FormData from "./components/FormData/FormData";
import CitiesProvider from "./Contexts/CitiesContext";
import { useState } from "react";
import PageNotFound from "./pages/NotFound/PageNotFound";

const App = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const getUserData = () => {
    const userData = localStorage.getItem("user");
    setCurrentUser(userData);
  };
  const clearUserData = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };
  const ProtectedRoute = function ({ children }) {
    if (currentUser === null) {
      return <Navigate to={"/login"} />;
    } else {
      return <>{children}</>;
    }
  };
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login getUserData={getUserData} /> },
        { path: "pricing", element: <Pricing /> },
        { path: "product", element: <Product /> },
        {
          path: "app",
          element: (
            <ProtectedRoute>
              <AppLayout clearUserData={clearUserData} />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "",
              element: <Navigate replace to="cities" />,
            },
            {
              path: "cities",
              element: <CityList />,
            },
            { path: "cities/:id", element: <City /> },
            {
              path: "countries",
              element: <CountryList />,
            },
            { path: "form", element: <FormData /> },
          ],
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <CitiesProvider>
        <RouterProvider router={router} />
      </CitiesProvider>
    </>
  );
};

export default App;
