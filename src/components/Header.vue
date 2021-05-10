<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">Instagram</router-link>
      <form class="search" action="#">
        <input type="text" placeholder="Search" />
      </form>
      <nav>
        <router-link to="/">
          <IconHome />
          <IconHomeFill />
        </router-link>
        <router-link to="/"></router-link>
        <router-link to="/direct">
          <IconDirect />
          <IconDirectFill />
        </router-link>
        <router-link to="/explore">
          <IconExplore />
          <IconExploreFill />
        </router-link>
        <router-link to="/profile">Profile</router-link>
        <icon />
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from '@/icons/home.vue'
import IconHomeFill from '@/icons/home-fill.vue'
import IconDirect from '@/icons/direct.vue'
import IconDirectFill from '@/icons/direct-fill.vue'
import IconExplore from '@/icons/explore.vue'
import IconExploreFill from '@/icons/explore-fill.vue'
import Container from '@/components/Container.vue'
export default {
  name: 'MainHeader',
  components: {
    IconHome,
    IconHomeFill,
    Container,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill
  }
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid rgb(var(--b6a));
}

.header-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 20px;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}

.search {
  text-align: center;

  input {
    border: 1px solid rgb(var(--b6a));
    border-radius: 4px;
    background-color: rgb(var(--b3f));
    width: 215px;
    height: 28px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>