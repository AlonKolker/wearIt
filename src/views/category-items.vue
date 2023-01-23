<template>
  <section class="main-layout category-items-container">
    <itemCardList :items="items" />
  </section>
</template>

<script>

import itemCardList from "../cmps/item-card-list.vue"

export default {
  name: "Category-items",
  props: {},
  data() {
    return {}
  },
  created() {},
  computed: {
    items() {
      let category = this.$route.path.replace("/", "")
      console.log(this.$store.getters[category])
      return this.$store.getters[category]
    },
  },
  methods: {},
  components: { itemCardList },
}
</script>
