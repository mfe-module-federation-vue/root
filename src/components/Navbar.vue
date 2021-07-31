<template>
  <v-app-bar app color="primary" dark clipped-left>
    <v-app-bar-nav-icon @click="menuToggle"></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>
    <div>HI, {{ user.name.first }}</div>
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
import emitters from "store/emitters";

export default {
  name: "Navbar",
  data: () => ({ drawer: null, user: emitters.helpers.userData() }),
  components: { Profile },
  methods: {
    menuToggle() {
      this.$emit("menuToggle");
    },
  },
  mounted() {
    emitters.helpers.listen(emitters.EVENT_KEYS.USER, () =>
      console.log(
        "%c listen - root Menu - called from root: ",
        "color: #bada55;",
        (this.user = emitters.helpers.userData())
      )
    );
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
