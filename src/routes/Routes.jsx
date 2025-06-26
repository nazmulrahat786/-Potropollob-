import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCraftItems from "../pages/AddCraftItems/AddCraftItems";
import CraftViewDetails from "../pages/CraftViewDetails/CraftViewDetails";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllArtCraftItems from "../pages/AllArtCraftItems/AllArtCraftItems";
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList";
import UpdateDataForm from "../pages/UpdateDataForm/UpdateDataForm";
import Page404 from "../pages/Page404/Page404";
import PrivateRoute from "./PrivateRoute";
import SubcategoryItems from "../pages/SubcategoryItems/SubcategoryItems";
import SubCategoryDetails from "../pages/SubCategoryDetails/SubCategoryDetails";
import AboutPage from "../pages/AboutPage/AboutPage";
import SupportPage from "../pages/SupportPage/SupportPage";
import Overview from "../pages/Dashboard/Overview";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Page404></Page404>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://potropollob-server-side.vercel.app/addplants')
        },
        {
            path: '/addCraftItems',
            element: <PrivateRoute><AddCraftItems></AddCraftItems></PrivateRoute>
        },
        {
          path: '/plantViewDetails/:id',
          element: <PrivateRoute><CraftViewDetails></CraftViewDetails></PrivateRoute>,
          loader: () => fetch('https://potropollob-server-side.vercel.app/addplants')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/allArtCraftItems',
          element: <AllArtCraftItems></AllArtCraftItems>,
          loader: () => fetch('https://potropollob-server-side.vercel.app/addplants')
        },
        {
          path: '/myArtCraftList',
          element: <PrivateRoute><MyArtCraftList></MyArtCraftList></PrivateRoute>
        },
        {
          path: '/updateDataForm/:id',
          element: <UpdateDataForm></UpdateDataForm>,
          loader: ({params}) => fetch(`https://potropollob-server-side.vercel.app/addplants/${params.id}`)
        },
        {
          path: '/about',
          element: <AboutPage></AboutPage>,
          
        },
        
        {
          path: '/support',
          element: <SupportPage></SupportPage>,
          
        },
      
      ]
    },
    {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout /></PrivateRoute>,
    children: [
      { index: true, element: <Overview /> ,
         loader: () => fetch('https://potropollob-server-side.vercel.app/addplants')
      },
      { path: "add-plant", element: <AddCraftItems /> },
      { path: "my-plants", element: <MyArtCraftList /> },
      
    ],
  },
  ]);

export default router;