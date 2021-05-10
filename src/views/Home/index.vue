<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Home',
  components: {
    CustomText
    // IconHome
  }
}
</script>

<template>
  <div class="Home">
    <h1>Home</h1>
    <CustomText class="a1" tag="p">Merhaba Dünya</CustomText>
    <CustomText class="a2" tag="p" size="small">Merhaba Dünya</CustomText>
    <CustomText class="a3" tag="p" size="xsmall">Merhaba Dünya</CustomText>
    <CustomText tag="p" size="xxsmall">Merhaba Dünya</CustomText> -->
  </div>
</template>

<style scoped>
.a1 {
  color: rgb(var(--d69));
}

.a2 {
  color: rgb(var(--d69));
}

.a3 {
  color: rgb(var(--d69));
}
</style>
