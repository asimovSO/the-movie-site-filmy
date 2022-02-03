import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobileScreen: false,
    genresMovie: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ],
    listOfMovies: [
      {
        title: "Nyckeln till frihet",
        year: "1994",
        genres: ["Crime", "Drama"],
        ratings: [
          8, 8, 6, 10, 2, 3, 4, 5, 4, 9, 3, 9, 6, 10, 4, 8, 10, 1, 2, 8, 1, 9,
          5, 4, 4, 2, 4, 6, 9, 10,
        ],
        poster:
          "MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
        contentRating: "15",
        duration: "PT142M",
        releaseDate: "1995-03-03",
        averageRating: 0,
        originalTitle: "The Shawshank Redemption",
        storyline:
          "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.                Written by\nJ-S-Golden",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        imdbRating: 9.3,
        posterurl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
      },
      {
        title: "Gudfadern",
        year: "1972",
        genres: ["Crime", "Drama"],
        ratings: [
          6, 10, 4, 10, 1, 3, 7, 2, 3, 3, 3, 4, 2, 5, 6, 9, 10, 8, 7, 4, 8, 9,
          9, 10, 4, 6, 2, 9, 7, 7,
        ],
        poster:
          "MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
        contentRating: "15",
        duration: "PT175M",
        releaseDate: "1972-09-27",
        averageRating: 0,
        originalTitle: "The Godfather",
        storyline:
          "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\nJ. S. Golden",
        actors: ["Marlon Brando", "Al Pacino", "James Caan"],
        imdbRating: 9.2,
        posterurl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
      },
      {
        title: "Gudfadern del II",
        year: "1974",
        genres: ["Crime", "Drama"],
        ratings: [
          2, 5, 1, 1, 8, 4, 2, 3, 10, 10, 4, 9, 8, 9, 7, 6, 6, 9, 9, 4, 1, 8, 4,
          5, 7, 7, 7, 1, 10, 6,
        ],
        poster:
          "MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
        contentRating: "15",
        duration: "PT202M",
        releaseDate: "1975-07-28",
        averageRating: 0,
        originalTitle: "The Godfather: Part II",
        storyline:
          "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.                Written by\nKeith Loh <loh@sfu.ca>",
        actors: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
        imdbRating: 9.0,
        posterurl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
      },
    ],
    movieDetail: [],
  },
  mutations: {
    CHANGE_SCREEN(state) {
      state.mobileScreen = true;
    },
    SET_MOVIE_DETAIL(state, detail){
      state.movieDetail = detail
    }
  },
  actions: {
    START_CHANGE_SCREEN({ commit }) {
      commit("CHANGE_SCREEN");
    },
    GET_MOVIE_DETAIL({commit}, data){
      axios.get(`https://api.themoviedb.org/3/movie/${data.id}?api_key=4be48145897dabf44d7423efba324d64`)
      .then((res) => commit('SET_MOVIE_DETAIL', res.data))
    }
  },
  getters: {
    isMobileScreen(state) {
      return state.mobileScreen;
    },
    allMovies(state) {
      return state.listOfMovies;
    },
    showGenres(state) {
      return state.genresMovie;
    },
    showDetail(state){
      return state.movieDetail
    }
  },
  modules: {},
});
