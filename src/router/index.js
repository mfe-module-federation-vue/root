import VueRouter from "vue-router";

const Cart = () => import("cart/Cart");
const Profile = () => import("profile/Profile");
const Products = () => import("products/Products");

const routes = [
  { path: "/cart", component: Cart },
  { path: "/products", component: Products },
  { path: "/profile", component: Profile },
];

const router = new VueRouter({
  routes,
});

export default router;
