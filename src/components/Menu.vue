<template>
  <v-navigation-drawer app v-model="menuModel" absolute clipped>
    <v-list nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ user }}</v-list-item-title>
      </v-list-item-content>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { routes } from "../router";
import emitters from "store/emitters";

export default {
  name: "Menu",
  props: ["showMenu"],
  data() {
    return {
      user: emitters.helpers.userData().name.first,
      menuModel: true,
      items: routes,
      right: null,
    };
  },
  mounted() {
    console.log("mounted - root");
    emitters.helpers.listen(emitters.EVENT_KEYS.USER, () =>
      console.log(
        "listen - root Menu - called from root: ",
        (this.user = emitters.helpers.userData().name.first)
      )
    );
  },
  watch: {
    showMenu() {
      this.menuModel = this.showMenu;
    },
  },
};
</script>

<style>
.v-navigation-drawer__content {
  margin-top: 50px;
}
</style>
