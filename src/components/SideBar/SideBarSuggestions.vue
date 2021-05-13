<script>
import CustomText from '@/components/CustomText'
import Avatar from '@/components/Avatar'

export default {
  name: 'SideBarSuggestions',
  components: {
    CustomText,
    Avatar
  }
}
</script>

<template>
  <div class="top">
    <custom-text tag="b" size="normal">Suggestions For You</custom-text>
    <custom-text tag="a" size="small">See All</custom-text>
  </div>
  <div class="users">
    <div class="user">
      <div class="container">
        <avatar size="32" />
        <div class="username">
          <custom-text tag="b" size="normal">cihat.xyz</custom-text>
          <custom-text tag="span" size="normal">New to Instagram</custom-text>
        </div>
        <custom-text class="switch" tag="b" size="small">Follow</custom-text>
      </div>
    </div>
    <div class="user">
      <div class="container">
        <avatar size="32" />
        <div class="username">
          <custom-text tag="b" size="normal">asdf.xyz</custom-text>
          <custom-text tag="span" size="normal">New to Instagram</custom-text>
        </div>
        <custom-text class="switch" tag="b" size="small">Follow</custom-text>
      </div>
    </div>
    <div class="user">
      <div class="container">
        <avatar size="32" />
        <div class="username">
          <custom-text tag="b" size="normal">asdf.xyz</custom-text>
          <custom-text tag="span" size="normal">New to Instagram</custom-text>
        </div>
        <custom-text class="switch" tag="b" size="small">Follow</custom-text>
      </div>
    </div>
    <div class="user">
      <div class="container">
        <avatar size="32" />
        <div class="username">
          <custom-text tag="b" size="normal">asdfsdf.xyz</custom-text>
          <custom-text tag="span" size="normal">New to Instagram</custom-text>
        </div>
        <custom-text class="switch" tag="b" size="small">Follow</custom-text>
      </div>
    </div>
  </div>
  <div class="bottom">
    <custom-text tag="p" size="xsmall">
      About·Help·Press·API·Jobs·Privacy·Terms·Locations·Top Accounts·Hashtags·Language
    </custom-text>
  </div>
</template>


<style scoped lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  padding: 4px 16px;

  b {
    color: rgba(var(--f52));
  }

  a {
    color: rgba(var(--i1d));
    cursor: pointer;
    font-weight: 500;
  }
}

.users {
  margin-bottom: 20px;
  .user {
    padding: 8px 16px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

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
  }
}

.bottom {
  color: rgba(var(--edc));
  cursor: pointer;
}
</style>