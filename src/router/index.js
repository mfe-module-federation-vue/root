import VueRouter from "vue-router";

const Cart = () => import("cart/Cart");
const Products = () => import("products/Products");
import remoteProfileRoutes from "profile/routes";

export const routes = [
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

export default router;
