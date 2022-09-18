<template>
  <div>
    今日课程
    <p v-for="(item,index) in MyClass" :key="index">{{item.ClassName}}</p>
  </div>
  
</template>

<script>
import { computed } from 'vue'
import { mapState } from 'vuex'
export default {
  name: 'MyClass',
  data() {
    return {
      MyClass:[]
    }
  },
  computed: {
    ...mapState('Home', ['CurrentClass']),
    // MyClass(){
    //   return this.CurrentClass
    // }
  },
  mounted(){
    this.getMyClass()
  },
  methods:{
    getMyClass(){
      this.MyClass=this.CurrentClass
      console.log(this.CurrentClass);
    }
  }
}
</script>

<style>

</style>