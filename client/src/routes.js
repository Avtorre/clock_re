import About from "./pages/About";
import Main from "./pages/Main";
import { ABOUT_ROUTE, MAIN_ROUTE } from "./utils/consts";

export const routes = [
 {
    path: MAIN_ROUTE,
    Component: Main
 },
 {
    path: ABOUT_ROUTE,
    Component: About
 }
]