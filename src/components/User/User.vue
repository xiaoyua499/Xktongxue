<template>
  <div class="user">
    <div class="userDetails">
      <div class="detailsLeft">
        <img class="head" src="@/assets/User/NO.0003.png" alt="">
        <h1 class="name">小宇啊</h1>
      </div>
      <div class="detailsRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
    </div>
    <div class="other">
      <div class="otherLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
        <span class="title">我的收藏</span>
      </div>
      <div class="otherRight">
        <svg class="icon arrow" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
    </div>
    <div class="other">
      <div class="otherLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fasongxiaoxi"></use>
        </svg>
        <span class="title">我的回复</span>
      </div>
      <div class="otherRight">
        <svg class="icon arrow" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
    </div>
    <div class="other">
      <div class="otherLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shezhi"></use>
        </svg>
        <span class="title">软件设置</span>
      </div>
      <div class="otherRight">
        <svg class="icon arrow" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
    </div>
    <div class="other">
      <div class="otherLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span class="title">推荐给好友</span>
      </div>
      <div class="otherRight">
        <svg class="icon arrow" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  height: 617px;
  background-color: #f5f6f8;

  .userDetails {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 100px;
    background-color: #fff;

    .detailsLeft {
      display: flex;
      justify-content: center;
      align-items: center;

      .name {
        margin: 0;
        font-size: 16px;
      }

      .head {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

    }

    .detailsRight {
      .icon {
        width: 15px;
        height: 15px;
      }
    }
  }

  .other {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
    padding: 10px;
    background-color: #fff;

    .icon {
      width: 25px;
      height: 25px;
    }

    .otherLeft {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        margin-left: 15px;
        font-size: 14px;
        font-weight: 600;
      }
    }

    .otherRight {
      .arrow {
        width: 15px;
        height: 15px;
      }
    }
  }

  .other:nth-child(4) {
    margin-top: 15px;
  }
}
</style>