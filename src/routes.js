import { Home, Experience, Kuebik, Blog, Hello } from "./pages";

export const routes = [
  {
    path: "/",
    component: <Home />,
    header: false,
    footer: true,
  },
  {
    path: "/experience",
    component: <Experience />,
    header: true,
    footer: true,
  },
  {
    path: "/kuebik",
    component: <Kuebik />,
    header: true,
    footer: true,
  },
  {
    path: "/blog",
    component: <Blog />,
    header: true,
    footer: true,
  },
  {
    path: "/hello",
    component: <Hello />,
    header: true,
    footer: true,
  },
];
