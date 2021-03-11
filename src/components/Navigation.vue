<template>
   
   <div>
    <v-app-bar app :color="bg" elevate-on-scroll class="hidden-sm-and-down">
      <div class="d-flex align-center">

        <v-toolbar-title class="float-left white--text hidden-sm-and-down ml-3 mt-3">NAME</v-toolbar-title>
      </div>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn :to="{path: '/#features'}" text color="white">Features</v-btn>
          <v-btn href="#" text color="white">About us</v-btn>
          <v-btn :to="{path: '/#partners'}" text color="white">Partners</v-btn>
          <v-btn :to="{path: '/#contact'}" text color="white">Contact</v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-toolbar-title class="float-left white--text hidden-md-and-up ml-3 mt-3">NAME</v-toolbar-title>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="float-right white hidden-md-and-up mr-3 mt-3"></v-app-bar-nav-icon>

      <v-navigation-drawer app v-model="drawer" absolute  temporary class="dark">

        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="purple--text"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
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
