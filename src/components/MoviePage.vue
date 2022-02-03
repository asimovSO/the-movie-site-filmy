<template>
  <div class="pt-16 deep-orange lighten-5 movie-page">
    <v-container fluid class="pa-6 block-info">
      <v-btn elevation='0' class="btn-back" color='deep-orange dark-2' dark @click="returnToBack"><v-icon>mdi-arrow-left</v-icon>
       </v-btn>
      <v-row class="d-flex flex-column align-center">
        <v-img
          class=""
          :src="`https://image.tmdb.org/t/p/w300${showDetail.poster_path}`"
          max-width="300"
          max-height="500"
          contain
        ></v-img>
        <h2 class="ma-4">
          {{ showDetail.original_title }}
        </h2>
        <table cellspacing="8" class="data_info" border="0">
          <tr>
            <td class="t">Release date:</td>
            <td>{{ showDetail.release_date }}</td>
          </tr>
          <tr>
            <td class="t">Genres:</td>
            <td>
              <span v-for='genre in showDetail.genres' :key="genre.id">{{ genre.name }},  </span>
            </td>
          </tr>
          <tr>
            <td class="t">Rating:</td>
            <td>{{ showDetail.vote_average }}</td>
          </tr>
          <tr>
            <td class="t">Country:</td>
            <td>
              <span
                v-for="country in showDetail.production_countries"
                :key="country.iso_3166_1"
                >{{ country.name }},
              </span>
            </td>
          </tr>
        </table>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";


export default {
  name: "MoviePage",
  data() {
    return {
      genres_this_mov: [],
    };
  },
  methods: {
    displayGenres() {
      for (let b in this.showDetail.genres) {
        this.genres_this_mov.push(this.showDetail.genres[b].name);
      }
    },
    returnToBack(){
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(["showDetail"]),
  },
  created() {
    this.$store.dispatch("GET_MOVIE_DETAIL", { id: this.$route.params.id });
    
  },
  mounted() {},
};
</script>
<style>
.t {
  text-align: left;
  font-weight: 500 !important;
  vertical-align: top;
}
.btn-back {
  z-index: 2;
}
.block-info {
  gap: 20px;
}
.movie-page {
  min-height: 100vh;
}
</style>
