<template>
  <v-content>
    <v-container fluid>
      <v-layout wrap>
        <v-flex xs12>
          <h2>Buat Surat</h2>
        </v-flex>
        
        <hr class="my-2 hrJudul" />
 
        <v-card min-width="100%">
          <v-tabs show-arrows color="#508991" icons-and-text>
            <v-tab>
              Nota Dinas
              <v-icon>mdi-email-variant</v-icon>
            </v-tab>
            <v-tab>
              Surat Keluar
              <v-icon>mdi-email-send</v-icon>
            </v-tab>
            <v-tab>
              Surat Masuk
              <v-icon>mdi-email-receive</v-icon>
            </v-tab>

            <v-tab-item v-for="n in 3" :key="n">
              <v-container fluid>
                <v-form ref="form" style="width:100%">
                  <v-flex xs12 style="font-size:14px">
                    
                    <v-layout wrap mb-2>
                      <v-flex xs12 style="font-weight:bold;" class="mb-1">Kepada</v-flex>
                      <v-flex md8 xs12>
                        <v-autocomplete
                          multiple
                          chips
                          deletable-chips
                          class="mySelect"
                          :items="itemTo"
                          dense
                          hide-details
                          outlined
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <v-layout wrap mb-2>
                      <v-flex xs12 style="font-weight:bold;" class="mb-1">Nomor Dokumen</v-flex>
                      <v-flex sm6 xs12>
                        <v-text-field class="myForm" dense hide-details outlined></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout wrap mb-2>
                      <v-flex xs12 style="font-weight:bold;" class="mb-1">Subyek</v-flex>
                      <v-flex sm6 xs12>
                        <v-text-field class="myForm" dense hide-details outlined></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout wrap mb-2>
                      <v-flex xs12 style="font-weight:bold;" class="mb-1">Isi</v-flex>
                      <v-flex md8 sm12 xs12>
                        <v-textarea class="myForm" auto-grow hide-details outlined></v-textarea>
                      </v-flex>
                    </v-layout>
                    <v-layout wrap mb-2>
                      <v-flex xs12 style="font-weight:bold;" class="mb-1">Attachment</v-flex>
                      <v-flex lg3 xs12>
                        <v-file-input class="myFormFile" dense hide-details outlined></v-file-input>
                      </v-flex>
                    </v-layout>
                    <v-layout wrap pt-3>
                      <v-flex xs12 class="text-lg-left text-center">
                        <v-btn color="#508991" dark :block="isMobile">Kirim</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-form>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-layout>
    </v-container>
    <v-navigation-drawer dark v-model="$store.state.rightMenu" app clipped right>
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
      height: 0,
      itemTo: [
        "Menejer Teknologi Informasi, Menejemen Mutu & Resiko",
        "Menejer Fasilitas dan Pengembangan",
        "Menejer Pelayanan Pelanggan"
      ],
       tab: null, };
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
    this.$store.state.showRightButton = true;
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>
