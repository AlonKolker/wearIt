<template>
  <section class="main-layout category-items-container">
    <!-- <filter> -->
      <!-- cheackboxs -->
    <!-- <itemCardList :items="categoryItems" /> -->
    <itemCardList :items="items" />
    <!-- <pre>parent{{items}}</pre> -->

  </section>
</template>

<script>
import itemCardList from "../cmps/item-card-list.vue"
export default {
  name: "Category-items",
  props:{

  },
  data() {
    return {
      test:[1,2]
    }
  },
  created() {
    // let category = this.$route.path.replace('/', '')
    // this.items = this.$store.getters[category]
    // this.items = eval(text)
    //  console.log(text);
    //  console.log(this.categoryItem);
  },
  computed: {
    items(){
      let category = this.$route.path.replace('/', '')
      console.log(this.$store.getters[category]);
      return this.$store.getters[category]
    }
  },
  methods: {},
  components: { itemCardList },
}
</script>
