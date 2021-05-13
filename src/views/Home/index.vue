<script>
import Post from '@/components/Post'
import SideBar from '@/components/SideBar/SideBar'

export default {
  name: 'Home',
  components: {
    Post,
    SideBar
  }
}
</script>

<template>
  <div class="Home">
    <div class="timeline">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
    <div class="sidebar">
      <side-bar/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 28px;
  }
}

.sidebar {
  display: none;

  @media (--t) {
    display: block;
    margin-top: 16px;
    

    p {
      position: sticky;
      top: calc(var(--header-height) + 30px + 18px);
    }
  }
}
</style>
