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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { routes } from "../router";
export default {
  name: "Menu",
  props: ["showMenu"],
  data() {
    return {
      menuModel: true,
      items: routes,
      right: null,
    };
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