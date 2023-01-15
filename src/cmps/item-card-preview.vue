<template class="item-card-preview">
  <section v-if="item" class="item-card-preview-container" @click="toItemPage()">
    <img :src=item.img alt="" />
    <span class="item-title">{{item.title}}</span>
    <!-- <span class="item-title">{{item.title}}</span> -->
    <div class="item-preview-content">
      <div class="item-lables" v-for="lable in item.lables">

        <span class="item-lable" >{{lable}}</span>
        <!-- <span class="item-lable">{{item.category}}</span> -->
        <!-- <span class="item-lable">Man</span> -->
      </div>
      <span class="item-price">{{item.price}}$</span>
    </div>
    <span class="text">Click for deatails</span>
  </section>
</template>

<script>
export default {
  name: "item-card-preview",
  date() {
    return {}
  },
  props: {
    item: Object,
  },
  created() {},
  methods: {
    toItemPage() {
      this.$router.push(`${this.item.category}/${this.item._id}`)
    },
  },
  computed: {},
  emits: [""],
  // components: { itemCardPreview },
}
</script>
