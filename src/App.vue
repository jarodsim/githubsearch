<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  font-family: 'Roboto Mono', Helvetica, Arial, sans-serif;
  text-align: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
