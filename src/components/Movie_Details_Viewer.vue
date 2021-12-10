<template>
  <v-row justify="center">
    <v-dialog
      v-model="isShow"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="dialog-box">
        <v-toolbar dark>
          <v-toolbar-title>Movie Name</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon class="appBar-icon" @click="dialogAction">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <!-- <v-toolbar-items>
            <v-btn dark text @click=""> Close </v-btn>
          </v-toolbar-items> -->
        </v-toolbar>
        <v-container fluid>
          <p class="text-headline">
            Ronny (Tiger Shroff) a spoilt army brat, is sent to a martial arts
            academy by his dying father to discipline him. Ronny though a very
            capable learner, continues his mischief until he finally understands
            the importance of the art taught by the Guru. Sia (Shraddha Kapoor),
            an upcoming actress of the south, is Ronny's love interest.
          </p>
          <p class="text-headline">
            Ronny (Tiger Shroff) a spoilt army brat, is sent to a martial arts
            academy by his dying father to discipline him. Ronny though a very
            capable learner, continues his mischief until he finally understands
            the importance of the art taught by the Guru. Sia (Shraddha Kapoor),
            an upcoming actress of the south, is Ronny's love interest.
          </p>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "movieDetailsViewer",
  props: ["isShow", "Details"],
  data() {
    return {};
  },
  methods: {
    dialogAction() {
      this.$emit("dialogAction");
    },
  },
};
</script>
<style lang="scss" scoped>
.text-headline {
  text-align: start !important;
}
</style>