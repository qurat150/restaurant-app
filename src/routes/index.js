import MainLayout from "../layouts/MainLayout";
import { publicRoutes } from "./public";

export const routes = [
    {
        path: "/",
        element : <MainLayout />,
        children : publicRoutes
    }
]