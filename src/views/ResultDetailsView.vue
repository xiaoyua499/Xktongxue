<template>
  <div class="details">
    <ResultDetails />
  </div>
</template>
    
<script>
import ResultDetails from '@/components/Results/ResultDetails.vue';
import NavBar from '@/components/Results/NavBar.vue';
export default {
  components: { ResultDetails, NavBar },
}
</script>

<style>
.details {
  width: 100%;
}
</style>