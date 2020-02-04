<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center"></v-row>
    </v-container>
    <v-navigation-drawer v-model="$store.state.rightMenu" dark app clipped right>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  computed: {
    isMobile() {
      return this.width < 960;
    }
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if (this.isMobile) {
      this.$store.state.rightMenu = false;
    } else {
      this.$store.state.rightMenu = true;
    }
    this.$store.state.showRightButton=true;
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>
