<template>
  <div class="tieBa">
    <div class="tieBaTop">
      <p class="title">表白墙</p>
      <div class="more">
        <span>查看更多</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </div>
    </div>
    <div class="TiebaBottom">
      <p class="content">
        新生9月开学，如何选择社团？首选学生会？附面试攻略！
      </p>
      <div class="other">
        <span class="time">08/22 18:00</span>
        <span>阅读数:666万+</span>
      </div>
    </div>
    <div class="TiebaBottom">
      <p class="content">
        新生9月开学，如何选择社团？首选学生会？附面试攻略！
      </p>
      <div class="other">
        <span class="time">08/22 18:00</span>
        <span>阅读数:666万+</span>
      </div>
    </div>
    <div class="TiebaBottom">
      <p class="content">
        新生9月开学，如何选择社团？首选学生会？附面试攻略！
      </p>
      <div class="other">
        <span class="time">08/22 18:00</span>
        <span>阅读数:666万+</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TieBa',
}
</script>

<style lang="less" scoped>
.tieBa {
  margin-top: .2rem;
  background-color: #fff;
  border-radius: .16rem;

  .tieBaTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem .2rem;
    border-bottom: .02rem solid rgb(240, 236, 236);

    .title {
      margin: 0;
      font-weight: 800;
    }

    .more {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: .24rem;
      }

      .icon {
        width: .24rem;
        height: .24rem;
      }
    }
  }

  .TiebaBottom {
    padding: .1rem .2rem;
    border-bottom: .02rem solid rgb(240, 236, 236);

    .content {
      text-align: left;
      font-size: .28rem;
      font-weight: 700;
    }

    .other {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .24rem;
    }
  }

}
</style>