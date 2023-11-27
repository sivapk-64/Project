import { createBrowserRouter } from "react-router-dom";
import SignupPage from "./SignupPage";
import Home from './Home'
import Checkout from "./Checkout";
import NewLogin from "./NewLogin";
const Router=createBrowserRouter([
    {path:"/",element:<Home/>},{path:"/signup",element:<SignupPage/>},{path:"/checkout",element:<Checkout/>},{path:"/login",element:<NewLogin/>}

])
export default Router;