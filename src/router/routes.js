import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
   {id: 1, path: '/about', component: <About/>, exact: true},
   {id: 2, path: '/posts', component:  <Posts/>, exact: true},
   {id: 3, path: '/posts/:id', component:  <PostIdPage/>, exact: true},
   {id: 4, path: '/error', component: <Error/>, exact: true},
]