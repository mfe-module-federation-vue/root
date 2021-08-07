<template>
  <v-app>
    <v-app-bar v-if="$route.path === '/login'" app color="primary" dark />
    <Navbar v-else @menuToggle="changeMenuState" />
    <Menu v-if="$route.path !== '/login'" :showMenu="drawer" />

    <Main />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Menu,
    Main,
  },

  data: () => ({
    drawer: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
  mounted() {
    // console.log("root", this.$store);
    this.$store.dispatch("user/setUser", { usuario: "teste" });
    console.log("mounted - App.vue - root");
  },
  methods: {
    changeMenuState() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
