<script>
export default {
  name: 'Home'
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<style scoped>
h1 {
  color: blue;

  @media (--t) {
    color: red;
  }
}
</style>
