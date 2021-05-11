<script>
import MasterHeader from '@/components/Header.vue'
import Container from '@/components/Container.vue'

export default {
  name: 'App',
  components: {
    MasterHeader,
    Container
  }
}
</script>

<template>
  <div class="app">
    <MasterHeader />
    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 4000px;
}
.main {
  padding-top: 30px;
}
</style>
