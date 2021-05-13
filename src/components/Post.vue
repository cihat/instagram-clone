<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'
import IconMore from '@/icons/more'
import IconLike from '@/icons/like'
import IconComment from '@/icons/comment'
import IconDirect from '@/icons/direct'
import IconSave from '@/icons/save'
import IconEmoji from '@/icons/emoji'
export default {
  name: 'Post',
  components: {
    Avatar,
    CustomText,
    IconMore,
    IconLike,
    IconComment,
    IconDirect,
    IconSave,
    IconEmoji
  }
}
</script>
    CustomText

<template>
  <div class="post">
    <!-- header -->
    <header class="header section">
      <div class="header-author">
        <Avatar :size="40" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">cihat.xyz</CustomText>
          </div>
          <CustomText size="xsmall">Montreal, Quebec</CustomText>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>

    <!-- media -->
    <div class="post-media">
      <img src="https://picsum.photos/600/400?random=1" alt="" />
    </div>

    <!-- action -->
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>

      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button class="action-save" type="button">
        <IconSave />
      </button>
    </div>

    <!-- view count -->
    <div class="view-count section">
      <CustomText tag="b"> 1.545 Beğenme </CustomText>
    </div>

    <!-- comments list -->
    <div class="comments-list ">
      <div class="view-all section">View all 56 comments</div>
      <div class="comments section">
        <ul>
          <li>
            <CustomText tag="b">j.bezos</CustomText>
            <span class="comment-span">Yorum Yorum Yorum Yorum</span>
            <IconLike class="icon-like" />
          </li>
          <li>
            <CustomText tag="b">m.zuckerberg</CustomText>
            <span class="comment-span">Yorum Yorum Yorum Yorum</span>
            <IconLike class="icon-like" />
          </li>
          
        </ul>
      </div>
      <div class="time section">
        <CustomText size="xxsmall"  class="time-ago">10 MINUTES AGO</CustomText>
      </div>
      <div class="comment section">
        <IconEmoji class="emoji"/>
        <input type="text" placeholder="Add a comment...">
        <a href="#" type="button">Post</a>
      </div>
    </div>

    <!-- datetime -->

    <!-- comments form -->
  </div>
</template>


<style scoped lang="scss">
.post {
  border-radius: 3px;
  border: 1px solid rgba(var(--b6a), 1);
  max-width: 601px !important;
  margin-bottom: 60px;

  .section {
    padding-left: 16px;
    padding-right: 16px;
  }

  .header {
    display: flex;
    align-items: center;
    height: 60px;

    &-author {
      display: flex;
      align-items: center;

      &-info {
        margin-left: 8px;
      }
    }

    &-more {
      margin-left: auto;
    }
  }

  .action-buttons {
    height: 44px;
    display: flex;
    align-items: center;

    button {
      margin-right: 16px;
    }

    .action-save {
      margin-left: auto;
      margin-right: 0;
    }
  }

  .view-count {
    margin-bottom: 8px;
  }

  .comments-list {
    .view-all {
      color: rgba(var(--f52), 1);
    }
    .comments {
      ul {
        li {
          display: flex;
          align-items: flex-start;
          b:hover {
            text-decoration: underline;
            cursor: pointer;
          }

          .comment-span {
            margin-left: 4px;
            overflow: auto;
          }

          .icon-like {
            height: 12px;
            width: 12px;
            margin-left: auto;
          }
        }
      }
    }

    .time-ago {
      color: rgba(var(--f52),1);
      margin-bottom: 4px;
    }

    .comment {
      max-width: inherit;
      border-top: 1px solid #efefef;
      margin-top: 4px;
      display: flex;
      height: 55px;
      align-items: center;

      .emoji {
        margin-right: 16px;
      }

      input {
        flex: 1;
        &:focus {
          outline: none;
        }
        &::placeholder {
              background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
        }
      }

      a {
        margin-left: 16px;
        color: rgba(var(--d69,0,149,246),1);
      }
    }
  }
}
</style>