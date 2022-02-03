<template>
  <v-card width="350" outlined>
    <router-link :to="{ name: 'film', params: { id: movie.id } }"
      ><v-img contain :src="source_of_img" height="500"></v-img
    ></router-link>
    <div>
      <h3 class="px-3 py-3 movie-title">{{ movie.original_title }}</h3>

      <v-card-text class="py-1 px-3"
        >Year: {{ movie.release_date | showYear }}</v-card-text
      >
      <v-card-text class="py-1 px-3">Genre: {{ genre.join(', ') }}</v-card-text>
      <div class="py-2 px-3 d-flex justify-space-between align-center">
        <v-rating
          class=""
          length="10"
          :color="starColor"
          half-increments
          readonly
          disable
          dense
          size="16"
          :value="movie.vote_average"
        ></v-rating>
        <p class="ma-0 font-weight-bold" :class="classFame">
          {{ movie.vote_average }}
        </p>
        <!-- :class="{'vote--green': movie.vote_average >= 7}" -->
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CardOfMovie",
  props: ["movie", "img_movie"],
  data() {
    return {
      genre: [],
      source_of_img: "https://image.tmdb.org/t/p/w500" + this.img_movie,
    };
  },
  methods: {
    movieGetGenre() {
      for (let i in this.showGenres) {
        for (let n in this.movie.genre_ids) {
          if (this.movie.genre_ids[n] == this.showGenres[i].id) {
            this.genre.push(this.showGenres[i].name)
          }
        }
        //
      }
    },
  },
  computed: {
    ...mapGetters(["showGenres"]),
    classFame() {
      if (this.movie.vote_average >= 7) {
        return "vote--green";
      } else if (4.5 < this.movie.vote_average < 7) {
        return "vote--yellow";
      } else {
        return "vote--red";
      }
    },
    starColor() {
      if (this.movie.vote_average >= 7) {
        return "green";
      } else if (4.5 < this.movie.vote_average < 7) {
        return "warning";
      } else {
        return "grey";
      }
    },
  },
  // methods: {
  //   showGenres(){
  //      this.genre = this.movie.genres.join(', ')
  //      console.log(this.genre)
  //   }
  // },
  filters: {
    showYear(word) {
      return word.slice(0, 4);
    },
  },
  mounted() {
    this.movieGetGenre();
  },
};
</script>
<style lang="scss" scoped>
.movie-title {
  /* white-space: nowrap !important; */
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden;
  text-overflow: ellipsis !important;
}
.vote {
  &--green {
    color: green;
  }
  &--yellow {
    color: #fb8c00;
  }
  &--red {
    color: red;
  }
}
</style>
