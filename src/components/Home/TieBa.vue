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
  margin-top: 10px;
  background-color: #fff;

  .tieBaTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-bottom: 1px solid rgb(240, 236, 236);

    .title {
      margin: 0;
      font-weight: 800;
    }

    .more {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 12px;
      }

      .icon {
        width: 12px;
        height: 12px;
      }
    }
  }

  .TiebaBottom {
    padding: 5px 10px;
    border-bottom: 1px solid rgb(240, 236, 236);

    .content {
      text-align: left;
      font-size: 14px;
      font-weight: 700;
    }

    .other {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }
  }

}
</style>