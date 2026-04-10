import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import ListedBooks from "../pages/Listed Books/ListedBooks";
import PagesToRead from "../pages/Pages-to-Read/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
        {index:true, Component:Home},
        {path:"listed", Component:ListedBooks},
        {path: "pages", Component:PagesToRead}
    ]
  },
  
]);