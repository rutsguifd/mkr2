<template>
  <div class="header">
    <span><router-link to="/about">ABOUT</router-link></span>
    <span><router-link to="/station-form">Station Form</router-link></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header{
    text-align: center;
    margin: 10px 20px;
    background: pink;
    span{
        margin: 0px 20px;
    }
}
</style>