<template>
  <v-app-bar app color="primary" dark clipped-left>
    <v-app-bar-nav-icon @click="menuToggle"></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>
    <div>HI, {{ user.name.last }}</div>
    <Logout class="ml-2" />
    <v-menu
      absolute
      offset-y
      style="max-width: 600px; width: 600px; right: -630px; top: 0"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <Profile />
    </v-menu>
  </v-app-bar>
</template>

<script>
const Profile = () => import("profile/Profile");
const Logout = () => import("auth/Logout");

import { emitter, EVENT_KEYS } from "../remotes/dealful";
import UserTools from "auth/UserTools";

export default {
  name: "Navbar",
  data: () => ({ drawer: null, user: UserTools.storage.userData() }),
  components: { Profile, Logout },
  methods: {
    menuToggle() {
      this.$emit("menuToggle");
    },
  },
  mounted() {
    emitter.on(EVENT_KEYS.CHANGE_USER, (newUserData) => {
      console.log(
        "%c listen - root Menu - called from root: ",
        "color: #bada55;"
      );
      this.user = newUserData();
    });
  },
};
</script>

<style scoped>
.v-menu__content {
  right: 0px !important;
  width: 500px;
  overflow: hidden;
}
</style>
