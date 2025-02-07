import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";


const router= createBrowserRouter([
    {path:'/', element:<Main/>, 
        children:[
            {path:'/', element:<Home/>}
        ]},
    {path:'/home', element:<h2>This /home route</h2>}
]);

export default router;