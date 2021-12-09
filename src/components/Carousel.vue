<template>
  <div>
    <p class="text-caption-new fbig">{{ title }}</p>
    <carousel-3d
      :autoplay="true"
      :autoplayTimeout="5000"
      :display="7"
      :height="213"
      :width="130"
      :inverse-scaling="200"
      :space="160"
      :disable3d="true"
      :controls-visible="true"
    >
      <slide
        class="caro-card popup"
        :class="isHover ? 'hover' : ''"
        @mouseover.native="isHover = true"
        @mouseleave.native="isHover = false"
        :index="0"
      >
        <v-btn v-if="isHover" @click="dialogAction" class="button">View</v-btn>
        <img :class="isHover ? 'hover' : ''" src="@/assets/images/img_ (1).png" alt="" />
        <DetailCard @dialogAction="dialogAction" :isShow="isDetailCard" />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import DetailCard from "./Movie_Details_Viewer";

export default {
  name: "carousel",
  props: ["title", "data"],
  data: () => ({
    isHover: false,
    isDetailCard: false,
  }),
  components: {
    Carousel3d,
    Slide,
    DetailCard,
  },
  methods: {
    dialogAction() {
      this.isDetailCard = !this.isDetailCard;
    },
  },
};
</script>

<style lang="scss" >
@import "@/styles/colors.scss";

.caro-card {
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
    // position: relative;
    // top: -5px;
    border: 4px solid $apecGreenTeal_1 !important;
    // box-shadow: 0px 0px 25px $apecGreenTeal_1 !important;
    transition: top 0.4s ease;
  }
}

.fbig {
  font-weight: 500;
  text-align: start !important;
}
.next,
.prev {
  color: $apecWhite_1 !important;
}
</style>