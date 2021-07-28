<template>
  <v-app>
    <Navbar @menuToggle="changeMenuState" />

    <Menu :showMenu="drawer" />

    <Main />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";
import Main from "./components/Main.vue";
import emitters from "store/emitters";

export default {
  name: "App",

  components: {
    Navbar,
    Menu,
    Main,
  },

  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
  mounted() {
    // console.log("root", this.$store);
    this.$store.dispatch("user/setUser", { usuario: "teste" });
    console.log("mounted - root");
    emitters.helpers.listen(emitters.EVENT_KEYS.USER, () =>
      console.log(
        "listen - called from root: ",
        (this.user = emitters.helpers.userData().name.first)
      )
    );
  },
  methods: {
    changeMenuState() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
