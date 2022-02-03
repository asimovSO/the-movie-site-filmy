<template>
    <div>
        <v-select @change='sortBy' label='Сортировать по' solo dense flat hide-details :items='typeOfSort' background-color='deep-orange lighten-1' dark color='deep-orange darken-2'></v-select>
    </div>
</template>
<script>
export default {
  name: "Filters",
  data: () => ({
    typeOfSort: ["По названию", 'По году', "По рейтингу", "По просмотрам"],
  }),
  methods:{
    sortBy(){
      console.log('done')
    }
  }
};
</script>
