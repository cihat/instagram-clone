<script>
import MasterHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    MasterHeader
  }
}
</script>

<template>
  <div class="app">
    <MasterHeader />
    <router-view />
  </div>
</template>

<style  scoped>
</style>
