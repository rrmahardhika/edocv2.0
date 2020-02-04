<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
      src="https://www.docbyte.com/wp-content/uploads/2018/04/Digital-Archiving-845x321.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, #508991 ,rgb(45,67,115,.5)"></v-img>
      </template>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-badge color="red" v-model="showBadge">
          <span slot="badge">{{totalNotif}}</span>
          <v-icon>mdi-menu</v-icon>
        </v-badge>
      </v-app-bar-nav-icon>
      <v-toolbar-title v-if="!isMobile">EDOC - PT PRIMA MULTI TERMINAL</v-toolbar-title>
      <v-toolbar-title v-else>EDOC - PMT</v-toolbar-title>
      <v-spacer />
      <v-btn text v-if="!isMobile" style="height:100%" @click="$router.push('profile')">
        <v-avatar class="mx-2" size="36">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-flex
          v-if="!isMobile"
          shrink
          style="text-transform:none; letter-spacing:normal;"
        >Randy R Mahardhika</v-flex>
      </v-btn>
      <v-btn
        icon
        @click.stop="$store.state.rightMenu = !$store.state.rightMenu"
        v-if="$store.state.showRightButton"
      >
        <v-icon v-if="!$store.state.rightMenu">mdi-chevron-left-circle-outline</v-icon>
        <v-icon v-else>mdi-chevron-right-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" app mini-variant>
      <v-list>
        <v-tooltip nudge-left="20" right v-for="item in items" :key="item.title">
          <template v-slot:activator="{ on }">
            <v-list-item class="menuSamping" v-on="on" :to="item.route" link>
              <span style="text-align: center;">
                <v-badge color="red" v-model="item.notif">
                  <span slot="badge">{{item.notif}}</span>
                  <v-icon>{{item.icon}}</v-icon>
                </v-badge>
                <div style="font-size: 9px; font-weight:bold">{{item.title}}</div>
              </span>
            </v-list-item>
          </template>
          <span>{{item.title}}</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
    <v-badge color="green" content="6">Item Two</v-badge>
    <v-footer app color="#508991" class="white--text" style="font-size:13px">
      <span>Electronic Document Management System. (E-Doc versi 2.0)</span>
      <v-spacer />
      <span>&copy; 2020 - PT Prima Multi Terminal</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    items: [
      {
        route: "/",
        title: "Dashboard",
        icon: "mdi-home-account",
        notif: 0
      },
      {
        route: "profile",
        title: "Data Diri",
        icon: "mdi-account-badge-horizontal",
        notif: 0
      },
      {
        route: "create",
        title: "Buat Surat",
        icon: "mdi-email-edit",
        notif: 0
      },
      {
        route: "inbox",
        title: "Kotak Masuk",
        icon: "mdi-email-receive",
        notif: 9
      },
      {
        route: "outbox",
        title: "Kotak Keluar",
        icon: "mdi-email-send",
        notif: 0
      },
      {
        route: "archive",
        title: "Ruang Arsip",
        icon: "mdi-email-multiple",
        notif: 0
      },
      {
        route: "logout",
        title: "Keluar",
        icon: "mdi-logout",
        notif: 0
      }
    ],
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    showTooltip: false,
    width: 0,
    height: 0
  }),
  computed: {
    isMobile() {
      return this.width < 960;
    },
    showBadge() {
      return !this.drawer && this.totalNotif > 0;
    },
    totalNotif() {
      let totalNotif = 0;
      for (let index = 0; index < this.items.length; index++) {
        totalNotif = totalNotif + this.items[index].notif;
      }
      return totalNotif;
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
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>