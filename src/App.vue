<template>
  <v-app id="app">

    <Navigation/>

   

    <v-main>
      <Section1 id="features"></Section1>
      <Section1 id="partners"></Section1>
      <Section1 id="contact"></Section1>
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Section1 from "./components/Section1";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",

  components: {
    Navigation,
    Section1,
    AppFooter
  },

  

};
</script>

<style>

#app{
  background: #1C1F2E;
  color: white;
}

</style>