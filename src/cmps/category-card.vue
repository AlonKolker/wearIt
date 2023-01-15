<template>
  <section @click="openCategory()" class="card">
    <img :src="'./public/' + category + '.jpg'" alt="" />
    <div class="card-title">{{ category }}</div>
    <span class="line"></span>
  </section>
</template>
<!-- import img1 from "../assets/image/longshirt1.jpg" -->

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
