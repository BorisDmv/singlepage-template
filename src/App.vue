<template>
  <v-app id="app">
    <v-app-bar app :color="bg" elevate-on-scroll>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="#" text color="white">Features</v-btn>
        <v-btn href="#" text color="white">About us</v-btn>
        <v-btn href="#" text color="white">Partners</v-btn>
        <v-btn href="#" text color="white">Contact</v-btn>
      </v-toolbar-items>

    </v-app-bar>

    <v-main>
      <Section1 />
      <Section1 />
      <Section1 />
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import Section1 from "./components/Section1";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",

  components: {
    Section1,
    AppFooter
  },

  data: () => ({

      bg: '#23273B'

  }),
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = '#23273B';
      } else {
        this.bg = 'transparent';
      }
    },
  },

};
</script>

<style>

#app{
  background: #1C1F2E;
  color: white;
}

</style>