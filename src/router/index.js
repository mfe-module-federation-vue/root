import VueRouter from "vue-router";

const Cart = () => import("cart/Cart");
const Products = () => import("products/Products");
const Login = () => import("auth/Login");
import remoteProfileRoutes from "profile/routes";
import { dealful } from "../remotes/dealful";

export const routes = [
  {
    path: "/login",
    title: "login",
    name: "Login",
    component: Login,
  },
  { path: "/cart", title: "Cart", icon: "mdi-cart", component: Cart },
  {
    path: "/products",
    title: "Products",
    icon: "mdi-tag-heart",
    component: Products,
  },
  ...remoteProfileRoutes,
];

const router = new VueRouter({
  routes,
});

async function beforeResolve(to, from, next) {
  const hasToken = localStorage.getItem(dealful.STORAGE_KEYS.TOKEN);
  const noAuth = !hasToken && to.path !== "/login";
  noAuth ? next({ name: "Login" }) : next();
}

router.beforeResolve((to, from, next) => beforeResolve(to, from, next));

export default router;
