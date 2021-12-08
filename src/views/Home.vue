<template>
  <v-container fluid>
    <SearchContainer />
    <br />
    <br />
    <br />
    <Carousel :title="'Most Views'" />
    <br />
    <br />
    <Carousel :title="'Most Downloads'" />
    <br />
    <hr class="divider" />
    <br />
    <FilterContainer />
    <br />
    <div class="movie-container">
      <MovieCard v-for="item in dataList" :key="item" :Data="item" />
    </div>
  </v-container>
</template>

<script>
import SearchContainer from "@/components/Search_Container.vue";
import Carousel from "@/components/Carousel.vue";
import FilterContainer from "@/components/Filter.vue";
import MovieCard from "@/components/Movie_Card.vue";

export default {
  name: "Home",
  data: () => ({
    isHover: false,
    dataList: [
      "@/assets/images/img_(1).png",
      "@/assets/images/img_(2).png",
      "@/assets/images/img_(3).png",
      "@/assets/images/img_(4).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
      "@/assets/images/img_(20).png",
    ],
  }),
  components: {
    SearchContainer,
    Carousel,
    FilterContainer,
    MovieCard,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.movie-container {
  margin: 20px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
