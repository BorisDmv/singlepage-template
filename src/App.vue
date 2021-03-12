<template>
  <v-app id="app">

    <Navigation/>

   

    <v-main>
      <Section1 id="aboutus"></Section1>
      <Section2 id="features"></Section2>
      <Section3 id="partners"></Section3>
      <Section4 id="contact"></Section4>
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",

  components: {
    Navigation,
    Section1,
    Section2,
    Section3,
    Section4,
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