import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import ListedBooks from "../pages/Listed Books/ListedBooks";
import PagesToRead from "../pages/Pages-to-Read/PagesToRead";
import bookdetails from "../pages/bookdetails/bookdetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>,
    children:[
        {
          index:true,
          loader: async () => {
            const res = await fetch("/data/booksData.json")
            const data =await res.json()
            return data
                        
          },
           Component:Home
          },
        {path:"listed", Component:ListedBooks},
        {path: "pages", Component:PagesToRead},
        {path:"bookdetails/:id", loader: async () => {
            const res = await fetch("/data/booksData.json")
            const data =await res.json()
            return data
                        
          }, Component: bookdetails}
    ]
  },
  
]);