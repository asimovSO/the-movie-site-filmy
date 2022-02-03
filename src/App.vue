<template>
  <v-app v-resize="checkClienScreen">
    <navbar-header></navbar-header>

    <keep-alive><router-view><main-content></main-content></router-view></keep-alive>
    <!-- <v-footer absolute padless color="black">GFGG</v-footer> -->
  </v-app>
</template>

<script>
import NavbarHeader from "@/components/Header.vue";
import MainContent from "@/components/MainContent.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: { NavbarHeader, MainContent },
  data: () => ({
    widthOfScreen: 0,
  }),
  methods: {
    ...mapActions(["START_CHANGE_SCREEN"]),
    checkClienScreen() {
      this.widthOfScreen = window.innerWidth;
      if (this.widthOfScreen < 600) {
        this.START_CHANGE_SCREEN();
      } else {
        this.$store.state.mobileScreen = false;
      }
    },
  },
  // created(){
  //   this.checkClienScreen()
  // }
};
</script>
<style lang="scss"></style>
