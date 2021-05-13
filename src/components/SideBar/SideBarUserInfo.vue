<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'

export default {
  name: 'SideBarUserInfo',
  components: {
    Avatar,
    CustomText
  }
}
</script>

<template>
  <div class="container">
    <avatar />
    <div class="username">
      <custom-text tag="b" size="normal">cihat.xyz</custom-text>
      <custom-text tag="span" size="normal">Cihat</custom-text>
    </div>
    <custom-text class="switch" tag="b" size="small">Switch</custom-text>
  </div>
</template>


<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 56px;
  margin-bottom: 22px;

  .username {
    margin-right: auto;
    margin-left: 12px;
    display: inline-flex;
    flex-direction: column;
  }
  .switch {
    color: rgba(var(--d69));
  }
}
</style>