<template>
  <div class="funBar">
    <div class="fun">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-biaobaiqiang"></use>
      </svg>
      <span>表白墙</span>
    </div>
    <div class="fun">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chengjichaxun"></use>
      </svg>
      <span @click="goResults()">成绩查询</span>
    </div>
    <div class="fun">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-richengjihua"></use>
      </svg>
      <span>日程</span>
    </div>
    <div class="fun">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bijiben"></use>
      </svg>
      <span>笔记</span>
    </div>
    <div class="fun">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
      <span>更多</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FunBar',
  methods:{
    //点击去成绩页面
    goResults(){
      this.$router.push('/results')
    }
  }
}
</script>

<style lang="less" scoped>
.funBar{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1rem;
  background-color: #fff;
  border-radius: .16rem;
  .fun{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .icon{
      width: .6rem;
      height: .6rem;
    }
    span{
      font-size: .24rem;
    }
  }
}
</style>