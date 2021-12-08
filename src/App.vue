<template>
  <v-app class="dark">
    <v-main class="main background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "@/styles/styles.scss";
</style>
 