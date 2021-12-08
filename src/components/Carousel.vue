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
      <slide class="caro-card popup" :index="0">
        <img src="@/assets/images/img_ (1).png" alt="" />
      </slide>
      <slide class="caro-card popup" :index="1">
        <img src="@/assets/images/img_ (2).png" alt="" />
      </slide>
      <slide class="caro-card popup" :index="2">
        <img src="@/assets/images/img_ (3).png" alt="" />
      </slide>
      <slide class="caro-card popup" :index="3">
        <img src="@/assets/images/img_ (4).png" alt="" />
      </slide>
      <slide class="caro-card popup" :index="4">
        <img src="@/assets/images/img_ (5).png" alt="" />
      </slide>
      <slide class="caro-card popup" :index="5">
        <img src="@/assets/images/img_ (6).png" alt="" />
      </slide>
      <slide class="caro-card popup" :index="6">
        <img src="@/assets/images/img_ (7).png" alt="" />
      </slide>
      <slide class="caro-card popup" :index="7">
        <img src="@/assets/images/img_ (8).png" alt="" />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "carousel",
  props: ["title","data"],
  components: {
    Carousel3d,
    Slide,
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
  & img {
    width: 100%;
    height: 213px;
    object-fit: cover !important;
    &:hover {
      transform: scale(1.3) !important;
      transition: all 0.4s ease-in-out;
    }
  }
  &:hover {
    cursor: pointer;
    border: 4px solid $apecGreenTeal_1 !important;
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