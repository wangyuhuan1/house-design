<template>
  <div id="app">
    <Item></Item>
  </div>
</template>

<script>
import Item from './components/Item'
export default {
  name: 'App',
  components: {
    Item
  }
}
</script>

<style>
*{
  margin:0;padding:0
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
