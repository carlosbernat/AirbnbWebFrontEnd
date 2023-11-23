import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Room from "../pages/Room";

const routes = [
    { path: '/', component: Home },
    { path: '/signIn', component: SignIn },
    { path: '/signUp', component: SignUp },
    { path: '/room', component: Room },
];
  
export default routes;