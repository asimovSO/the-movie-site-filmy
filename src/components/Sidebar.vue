<template>
  <div class="pa-4 sidebar-block">
    <div>
      <h3 class="text-center mb-4">Genres</h3>
      <div class="genres-block">
        <v-checkbox v-for='genre in showGenres' :key='genre.id' hide-details dense :label='genre.name'></v-checkbox>
      </div>
    </div>
    <div class="align-self-center">
      <v-btn class="btn-find" rounded dark color="green" elevation="0"
        >Find</v-btn
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  // props: ['drawerState']
  computed:{
    ...mapGetters(['showGenres'])
  }
};
</script>
<style>
.title-sort {
  font-size: 1.03rem;
}
.sidebar-block {
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.genres-block {
  height: 80vh;
  overflow-y: auto !important;
}
</style>
