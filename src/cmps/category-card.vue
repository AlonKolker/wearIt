<template>
  <section @click="openCategory()" class="card">
    <img :src="thisurl" alt="" />
    <div class="card-title">{{ category }}</div>
    <span class="line"></span>
  </section>
</template>

<script>

import pants from "../assets/image/pants.jpg"
import shirts from "../assets/image/shirts.jpg"
import shoes from "../assets/image/shoes.jpg"
import accsesories from "../assets/image/accsesories.jpg"

export default {
  name: "card",
  props: {
    category: {
      type: String,
    },
  },
  created() {},
  methods: {
    openCategory() {
      this.$router.push(`/${this.category}`)
    },
  },
  computed: {
    thisurl() {
      if (this.category === "pants") return pants
      if (this.category === "shirts") return shirts
      if (this.category === "shoes") return shoes
      if (this.category === "accsesories") return accsesories
    },
  },
  emits: [""],
}
</script>
