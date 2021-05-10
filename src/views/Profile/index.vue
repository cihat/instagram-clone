<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Profile',
  components: {
    CustomText
  }
}
</script>

<template>
  <div class="Profile">
    <CustomText tag="h1">Profile</CustomText>
    <div id="nav">
      <router-link to="/profile">Post</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/save">Save</router-link> |
      <router-link to="/profile/tag">Tag</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
</style>
