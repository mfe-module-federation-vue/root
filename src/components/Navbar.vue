<template>
  <v-app-bar app color="primary" dark clipped-left>
    <v-app-bar-nav-icon @click="menuToggle"></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({ drawer: null }),
  methods: {
    menuToggle() {
      this.$emit("menuToggle");
    },
  },
};
</script>
