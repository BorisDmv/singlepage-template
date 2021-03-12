<template>
   
   <div>

   <!--DESKTOP-->
    <v-app-bar app :color="bg" elevate-on-scroll class="hidden-sm-and-down">
      <div class="d-flex align-center">

        <v-toolbar-title class="float-left white--text hidden-sm-and-down ml-3 mt-3">NAME</v-toolbar-title>
      </div>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn :to="{path: '/#aboutus'}" text color="white">About us</v-btn>
          <v-btn :to="{path: '/#features'}" text color="white">Features</v-btn>
          <v-btn :to="{path: '/#partners'}" text color="white">Partners</v-btn>
          <v-btn :to="{path: '/#contact'}" text color="white">Contact</v-btn>
        </v-toolbar-items>
      </v-app-bar>


      <!--MOBILE-->
      <v-app-bar fixed :color="bg" elevate-on-scroll class="pb-16 hidden-md-and-up">
      <v-toolbar-title fixed class="float-left white--text hidden-md-and-up ml-3 mt-3">NAME</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="float-right white hidden-md-and-up mr-3 mt-3"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer fixed v-model="drawer" class="dark">

        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="purple--text"
          >
            <v-list-item dark :to="{path: '/#aboutus'}">
              <v-list-item-title >ABOUT US</v-list-item-title>
            </v-list-item>

            <v-list-item dark  :to="{path: '/#features'}">
              <v-list-item-title>FEATURES</v-list-item-title>
            </v-list-item>

            <v-list-item dark  :to="{path: '/#partners'}">
              <v-list-item-title>PARTNERS</v-list-item-title>
            </v-list-item>

            <v-list-item dark  :to="{path: '/#contact'}">
              <v-list-item-title>CONTACT</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>

      </v-navigation-drawer>

    </div>

</template>

<script>
export default {
  name: "Navigation",

  data: () => ({

      bg: '#23273B',
      drawer: false

  }),
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  created() {
    this.bg = 'transparent';
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        this.bg = '#23273B';
      } else {
        this.bg = 'transparent';
      }
    },
  },  
};
</script>
