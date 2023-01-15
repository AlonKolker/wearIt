<template>
  <section class="elplus-input-container">

    <el-select v-model="selectedFit" class="m-2" placeholder="Choose fit" size="large">
      <el-option v-for="(fit, idx) in item.fit" :key="idx" :fit="fit" :value="fit" />
    </el-select>

    <el-select v-model="selectedColor" class="m-2" placeholder="Choose color" size="large">
      <el-option v-for="(color, idx) in item.colors" :key="idx" :color="color" :value="color" />
    </el-select>

    <el-select v-model="selectedSize" class="m-2" placeholder="Choose size" size="large">
      <el-option v-for="(size, idx) in item.sizes" :key="idx" :color="size" :value="size" />
    </el-select>

    <el-button @click="onAddToBag" type="success">Add to bag</el-button>
  </section>
</template>

<script>
import {shopService} from '../services/shop.service'
export default {
  name: "",
  data() {
    return {
      selectedFit: "",
      selectedSize: null,
      selectedColor: null,
    }
  },
  props: { item: Object },
  created() {},
  methods: {
    onAddToBag() {
      let currItem = {
        bagId:shopService.makeId(),
        id: this.item._id,
        fit: this.selectedFit,
        size: this.selectedSize,
        color: this.selectedColor,
        qty: 1,
        price:+this.item.price
      }
      this.$store.dispatch({ type: "setBag", item:currItem })
    },
  },
  computed: {},
  emits: [""],
  components: {},
}
</script>
