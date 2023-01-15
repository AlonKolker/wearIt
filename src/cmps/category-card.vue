<template>
  <section @click="openCategory()" class="card">
    <img :src="'src/assets/image/' + category + '.jpg'" alt="" />
    <div class="card-title">{{ category }}</div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "card",
  props: {
    category: {
      type: String,
    },
   
  },
  created() {
    console.log(this.url)
  },
  methods: {
    openCategory() {
      this.$router.push(`/${this.category}`)
    },
  },
  computed: {
   
  },
  emits: [""],
}
</script>
