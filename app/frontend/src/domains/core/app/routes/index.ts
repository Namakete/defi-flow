import { Home } from "@domain/core/pages/home/";
import { Profile } from "@domain/core/pages/profile/";

export const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/profile",
    redirect: "/",
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: Profile,
  },
];
