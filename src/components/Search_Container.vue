<template>
  <div class="search-conatiner" :class="hideEnable ? 'appBar' : ''">
    <v-col cols="12" md="6">
      <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      clearable
      cache-items
      hide-no-data
      solo
      dense
      label="Search..."
    ></v-autocomplete>
      <!-- <v-text-field
        dense
        solo
        append-icon=" mdi mdi-magnify"
        label="Search"
      ></v-text-field> -->
    </v-col>
  </div>
</template>

<script>
export default {
  name: "searchContainer",
  data: () => ({
    scrollingValue: 0,
    hideEnable: false,
  }),
  created() {
    window.addEventListener("scroll", this.scrolling);
  },
  destroy() {
    window.removeEventListener("scroll", this.scrolling);
  },
  methods: {
    scrolling() {
      var currentScroll = window.top.scrollY;

      if (currentScroll > this.scrollingValue) {
        this.hideEnable = true;
      } else if (currentScroll == 0) {
        this.hideEnable = false;
      }
      this.scrollingValue = window.scrollY;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.search-conatiner {
  z-index: 2;
  height: 60px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.appBar {
  position: fixed;
  transition: all 0.3s ease-in-out;
}
.v-input {
  max-height: 35px !important;
  border-radius: 15px !important;
}
.v-input__slot {
  border: 1px solid $apecGreenTeal_1 !important;
}
</style>