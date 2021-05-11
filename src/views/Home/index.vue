<script>
import Post from '@/components/Post'
export default {
  name: 'Home',
  components: {
    Post
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
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
    grid-gap: 30px;
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
