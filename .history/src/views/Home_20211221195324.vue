<template>
  <div>
    <Header />
    A HOME PAGE
  </div>
</template>

<script>
import Header from '../components/Header.vue'
  export default {
    name: "Home",
    components: {
      Header
    }
  }
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
</style>