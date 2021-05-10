<script>
import CustomText from '../components/CustomText'
export default {
  name: 'Home',
  components: {
    CustomText
  }
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText class="a1" tag="p">Merhaba Dünya</CustomText>
    <CustomText class="a2" tag="p" size="small">Merhaba Dünya</CustomText>
    <CustomText class="a3" tag="p" size="xsmall">Merhaba Dünya</CustomText>
    <CustomText tag="p" size="xxsmall">Merhaba Dünya</CustomText>
  </div>
</template>

<style scoped>

.a1 {
  color: rgb(var(--a72))
}

.a2 {
  color: rgb(var(--b3f))
}

.a3 {
  color: rgb(var(--ba8))
}

</style>
