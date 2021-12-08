<template>
  <div class="filter-main" ref="filter">
    <div :class="isTopActiveFilter ? 'filterActiveBar' : ''">
      <p class="text-caption-new fbig">Filters</p>
      <div class="filter-container">
        <v-col cols="12" md="6" lg="4" xl="4">
          <v-autocomplete
            v-model="value"
            :items="items"
            clearable
            cache-items
            hide-no-data
            dense
            class="search-txt"
            solo
            label="Language"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6" lg="4" xl="4">
          <v-autocomplete
            v-model="value"
            :items="items"
            clearable
            cache-items
            hide-no-data
            dense
            solo
            label="Type"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6" lg="4" xl="4">
          <v-autocomplete
            v-model="value"
            :items="items"
            clearable
            cache-items
            hide-no-data
            dense
            solo
            label="Year"
          ></v-autocomplete>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter",
  data: () => ({
    isTopActiveFilter: false,
    language: "",
    type: "",
    year: "",
  }),
  created() {
    window.addEventListener("scroll", this.getElemetScrolledPosition);
  },
  destroy() {
    window.removeEventListener("scroll", this.getElemetScrolledPosition);
  },
  methods: {
    getElemetScrolledPosition() {
      var top = this.$refs.filter.getBoundingClientRect().top;
      if (top <= 100) {
        this.isTopActiveFilter = true;
      } else {
        this.isTopActiveFilter = false;
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/theme_styles.scss";

p {
  margin: 0px !important;
}
.filter-main {
  position: relative;
  z-index: 2;
  & .filter-container {
    display: flex;
    flex-wrap: wrap;
    & .vs-select-content {
      max-width: 100% !important;
    }
  }
  & .filterActiveBar {
    @extend .appBar;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    box-shadow: 0px 4px 5px $apecGrey_1 !important;
    transition: all 0.3s ease-in-out;
  }
}

.v-input {
  border-radius: 10px !important;
}
.fbig {
  text-align: center !important;
}
</style>