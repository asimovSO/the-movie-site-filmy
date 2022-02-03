<template>
  <v-main class="deep-orange lighten-5">
    <v-navigation-drawer
      v-model="drawerState"
      app
      right
      temporary
      class="side-bar"
    >
      <sidebar></sidebar>
    </v-navigation-drawer>
    <v-text-field
      class="my-3 d-sm-none d-flex px-5"
      placeholder="Search"
      dense
      filled
      hide-details
      flat
      rounded
    ></v-text-field>
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="6"
          sm="9"
          md="2"
          align-self="center"
          style="padding-left: 9px"
          ><h4 class="head-text">Movies</h4></v-col
        >
        <v-col
          cols="6"
          sm="3"
          md="2"
          align-self="center"
          class="my-6"
          style="padding-right: 9px"
          ><filters></filters
        ></v-col>
      </v-row>
      <v-btn @click="showData"></v-btn>
      <v-btn @click="showFilm">Film</v-btn>
      <v-row dense justify="center" justify-md="space-between" class="">
        <card-of-movie
          v-for="movie in movie_list"
          :key="movie.id"
          :movie="movie"
          :img_movie="movie.poster_path"
          class="ma-sm-5 mx-md-0 mb-md-5 block-of-movies"
        >
        </card-of-movie>
      </v-row>
    </v-container>
    <v-btn
      icon
      outlined
      color="deep-orange darken-2"
      class="open-drawer"
      @click.stop="drawerState = !drawerState"
    >
      <v-icon>mdi-arrow-left-bold-outline</v-icon></v-btn
    >
  </v-main>
</template>
<script>
import CardOfMovie from "@/components/CardOfMovie.vue";
import Sidebar from "./Sidebar.vue";
import Filters from "./Filters.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "MainContent",
  components: { CardOfMovie, Sidebar, Filters },
  data: () => ({
    drawerState: false,
    movie_list: null,
  }),
  methods: {
    showData() {
      console.log(this.movie_list);
    },
    showFilm() {
      console.log(
        axios
          .get(`https://api.themoviedb.org/3/movie/634649?api_key=4be48145897dabf44d7423efba324d64`)
          .then((res) => res.data)
      );
    },
  },
  computed: {
    ...mapGetters(["allMovies"]),
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4be48145897dabf44d7423efba324d64&language=en-US&page=1"
      )
      .then((response) => (this.movie_list = response.data.results));
  },
};
</script>
<style lang="scss">
.head-text {
  font-size: 30px;
}
.open-drawer {
  position: fixed !important;
  top: 50%;
  right: 5px;
}
.block-of-movies {
  @media screen and (max-width: 599px) {
    margin: 20px;
  }
}
</style>
