<template>
  <div>
    <button
    @click="$store.dispatch('fetchDoge')"
     v-if="!this.$store.state.loading">
     download
     </button>
     <button
    @click="$store.dispatch('fetchDoge')"
     v-if="this.$store.state.error">
     try again
     </button>
    <p v-if="this.$store.state.loading">loading</p>
    <p v-if="this.$store.state.error">error</p>
    <img v-if="hasImage" v-bind:src="src" alt="doge">
  </div>
</template>

<script>
export default {
  props: {
    src: String,
  },
  computed: {
    hasImage() {
      return !!this.$store.state.dogeSrc;
    },
  },
};
</script>

<style>

</style>
