<template>
  <section class="item-card-list">
    <item-card-preview v-for="item in items" :item="item"/>
  </section>
</template>

<script>
import itemCardPreview from "../cmps/item-card-preview.vue"

export default {
  name: "item-card-list",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  created() {
    console.log(this.items)
  },
  methods: {},
  computed: {},
  emits: [""],
  components: { itemCardPreview },
}
</script>
