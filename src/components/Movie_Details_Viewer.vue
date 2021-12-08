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
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "movieDetailsViewer",
  props: ["isShow"],
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
</style>