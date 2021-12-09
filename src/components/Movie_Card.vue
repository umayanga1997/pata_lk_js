<template>
  <div
    class="card popup"
    :class="isHover ? 'hover' : ''"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <v-btn v-if="isHover" @click="dialogAction" class="button">View</v-btn>
    <img :class="isHover ? 'hover' : ''" :src="Data" alt="" />
    <DetailCard @dialogAction="dialogAction" :isShow="isDetailCard" />
  </div>
</template>

<script>
import DetailCard from "./Movie_Details_Viewer";

export default {
  name: "movie-card",
  props: ["Data"],
  components: {
    DetailCard,
  },
  data: () => ({
    isHover: false,
    isDetailCard: false,
  }),
  methods: {
    dialogAction() {
      this.isDetailCard = !this.isDetailCard;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.card {
  margin: 10px;
  width: 130px;
  height: 213px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  & .button {
    position: absolute;
    z-index: 1;
  }
  & img {
    width: 100%;
    height: 213px;
    object-fit: cover !important;
    &.hover {
      transform: scale(1.3) !important;
      transition: all 0.4s ease-in-out;
    }
  }
  &.hover {
    cursor: pointer;
    position: relative;
    top: -5px;
    border: 4px solid $apecGreenTeal_1 !important;
    box-shadow: 0px 0px 25px $apecGreenTeal_1 !important;
    transition: top 0.4s ease;
  }
}
</style>