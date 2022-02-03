<template>
  <v-app-bar color="deep-orange darken-2" dark app elevation="0">
    <v-icon class="mr-5">mdi-movie-open-play-outline</v-icon>
    <v-tabs class="d-none d-sm-flex d-sm-none d-md-flex">
      <v-tab v-for='(link, i) in typeOfVideos' :key=i>{{link}}</v-tab>
    </v-tabs>
    <v-text-field
      class="d-none d-sm-flex d-sm-none d-md-flex"
      append-outer-icon="mdi-magnify"
      placeholder="Search"
      dense
      filled
      hide-details
      flat
      rounded
    ></v-text-field>
    <span class="text-h5 text-center d-flex d-sm-none d-none d-md-none">Filmy</span>
    <v-spacer></v-spacer>
    <v-menu offset-y v-if="isMobileScreen">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="dark" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for='(link, i) in typeOfVideos' :key=i>{{link}}</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "NvabarHeader",
  data: () => ({
      typeOfVideos: ['Movies', 'Series', 'Anime'],
  }),
  computed: {
    ...mapGetters(['isMobileScreen'])
  },
  methods: {

  }
};
</script>
