<template>
  <section class="">
    <app-header/>
      <router-view />
  </section>
</template>

<script>
import appHeader from '../src/cmps/app-header.vue'
export default {
  name: "app",
  components: {
    appHeader
  },
  created() {
    this.$store.dispatch({ type: "loadClothes" })
  },
}
</script>
