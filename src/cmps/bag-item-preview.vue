<template>
  <div v-if="item" class="item-details">
    <img class="item-img" :src="item.img" alt="" />
    <div class="item-propertys-left">
      <span class="item-name">{{ item.title }}</span>
      <span class="item-size">Size:</span>
      <span class="item-quntitiy">Qty:</span>
      <span class="price-lable">Price:</span>
    </div>
    <div class="item-propertys-right">
      <button
        @click="onRemove()"
        class="el-button el-button--danger is-circle"
        title="remove"
        aria-disabled="false"
        type="button"
      >
        <i class="el-icon"
          ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
            ></path></svg></i>
      </button>
      <span class="item-size">M</span>
      <span class="item-quntitiy">1</span>
      <span class="item-price">{{ item.price }}$</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bag-item-preview",
  props: { item: Object },
  created() {},
  methods: {
    onRemove() {
      this.$store.dispatch({ type: "removeBagItem", bagId: this.item.bagId })
    },
  },
  computed: {},
  emits: [""],
  components: {},
}
</script>
