<template>
  <div>
    <MyClass/>
  </div>

</template>

<script>
import MyClass from '@/components/Home/MyClass.vue';
// @ is an alias to /src


export default {
    name: "HomeView",
    components: { MyClass }
}
</script>
