<template>
   
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
        <v-btn :to="{path: '/#features'}" text color="white">Features</v-btn>
        <v-btn href="#" text color="white">About us</v-btn>
        <v-btn :to="{path: '/#partners'}" text color="white">Partners</v-btn>
        <v-btn :to="{path: '/#contact'}" text color="white">Contact</v-btn>
      </v-toolbar-items>

    </v-app-bar>

</template>

<script>
export default {
  name: "Navigation",

  data: () => ({

      bg: '#23273B',

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
