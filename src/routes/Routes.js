import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layouts/Main";
import Category from "../pages/Category/Category";
import News from "../pages/News/News";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/category/:id', element: <Category></Category> },
            { path: '/news/:id', element: <News></News> }
        ]
    }
])