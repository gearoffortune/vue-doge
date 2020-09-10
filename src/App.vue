<template>
  <div id="app">
    <Doge :src="dogeSrc"/>
  </div>
</template>

<script>
import Doge from './components/Doge.vue';

export default {
  name: 'App',
  components: {
    Doge,
  },
  computed: {
    dogeSrc() {
      return this.$store.state.dogeSrc;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
