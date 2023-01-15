<template>
  <section @click="openCategory()" class="card">
    <img src="https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G64/shotview/2085/620-626s.jpg" alt="" />
    <div class="card-title">{{category}}</div>
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
  created() {},
  methods: {
    openCategory() {
      this.$router.push(`/${this.category}`)
    },
  },
  computed: {},
  emits: [""],
}
</script>
