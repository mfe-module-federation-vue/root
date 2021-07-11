<template>
  <v-navigation-drawer app v-model="showMenu" absolute clipped>
    <v-list nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.route"
      >
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
export default {
  name: "Menu",
  props: ["showMenu"],
  data() {
    return {
      items: [
        { title: "Products", icon: "mdi-tag-heart", route: "/products" },
        { title: "Cart", icon: "mdi-cart", route: "/cart" },
        { title: "My Account", icon: "mdi-account", route: "/profile" },
      ],
      right: null,
    };
  },
};
</script>

<style>
</style>