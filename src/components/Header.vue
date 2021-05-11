<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">
        <div class="logo">
          <img alt="Instagram" src="../img/instagram-logo.png" />
        </div>
      </router-link>
      <form class="search" action="#">
        <input type="text" placeholder="Search" />
      </form>
      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'Direct'" />
          <IconDirect v-else />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
        </router-link>
        <router-link to="/heart">
          <IconHeartFill v-if="$route.name === 'Heart'" />
          <IconHeart v-else />
        </router-link>
        <router-link to="/profile">
          <div class="user-photo"></div>
        </router-link>
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
import IconHeart from '@/icons/heart.vue'
import IconHeartFill from '@/icons/heart-fill.vue'
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
    IconExploreFill,
    IconHeart,
    IconHeartFill
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
  height: 53px !important;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  height: 36px;
  img {
    height: 29px;
    margin-top: 8px;
  }
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

    &::placeholder {
      display: flex;
      text-align: center;
    }
    &:focus {
      outline: none;
    }
  }
}

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 24px;
  height: 22px;

  a {
    margin-left: 22px;
  }
}

.user-photo {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: black;
}
</style>