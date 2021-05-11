<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size"/>
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default:
        // 'https://placeimg.com/56/56/any'
        `https://picsum.photos/${56}/${56}`
    },
    alt: {
      type: String,
      default: 'image'
    },
    size: {
      type: Number,
      default: 56
    }
  }
}
</script>

<style scoped lang="scss">
.avatar {
  padding: 2px;
  border-radius: 50%;
  display: inline-flex;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );

  img {
    border: 2px solid white;
    border-radius: inherit;
  }
}
</style>