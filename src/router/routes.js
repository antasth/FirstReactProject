import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
   {id: 1, path: '/about', component: <About/>, exact: true},
   {id: 2, path: '/posts', component:  <Posts/>, exact: true},
   {id: 3, path: '/posts/:id', component:  <PostIdPage/>, exact: true},
   {id: 4, path: '/error', component: <Error/>, exact: true},
   {id: 5, path: '*', component: <Posts/>, exact: true}
]

export const publicRoutes = [
   {id: 1, path: '/login', component: <Login/>, exact: true},
   {id: 2, path: '*', component: <Login/>, exact: true}
]