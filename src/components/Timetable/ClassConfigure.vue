<template>
  <div class="popup">
    <van-form @submit="onSubmit">
      <van-field v-model="className" name="className" label="课程名称" :rules="[{ required: true, message: '请填写课程名称' }]"/>
      <van-field v-model="classroom" name="classroom" label="教室" :rules="[{ required: true, message: '请填写教室' }]"/>
      <van-field v-model="teacher" name="teacher" label="任课教师" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapMutations} from 'vuex';
export default {
  props: ['updataOldDetail','updataShow'],
  data() {
    return {
      className: '', //课程名称
      classroom: '', //教室
      teacher:'' //老师
    };
  },
  methods: {
    ...mapMutations('Timetable', ['updataDetails']),
    //提交数据
    onSubmit(values) {
      this.updataShow()
      this.updataDetails(values)
      this.updataOldDetail(values)
      // console.log('submit', values);
    },

  },
}
</script>

<style lang="less" scoped>

</style>