<template>
  <div class="Timetable">
    <NavBar />
    <ClassContent />
  </div>
</template>
<script>
import NavBar from '../components/Timetable/NavBar.vue'
import ClassContent from '@/components/Timetable/ClassContent.vue';
export default {
  name: 'TiemTable',
  components: {
    NavBar,
    ClassContent
  }
}
</script>
