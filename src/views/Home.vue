<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Section1 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/Section1.vue";

export default {
  name: "Home",
  components: {
    Section1
  }
};
</script>
