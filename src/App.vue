<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  margin-top: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<script>
import  Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
};
</script>


