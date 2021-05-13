<script>
import SideBarUserInfo from '@/components/SideBar/SideBarUserInfo'
import SideBarSuggestions from  '@/components/SideBar/SideBarSuggestions'
export default {
  name: 'SideBar',
  components: {
    SideBarUserInfo,
    SideBarSuggestions
  }
}
</script>

<template>
  <side-bar-user-info></side-bar-user-info>
  <side-bar-suggestions></side-bar-suggestions>
</template>


<style scoped lang="scss">
</style>