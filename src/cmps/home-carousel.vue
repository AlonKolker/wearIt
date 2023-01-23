<template>
  <section class="main-layout home-carousel">
    <el-carousel :interval="4000" type="card" height="350px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img class="carousel-img" :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
import img1 from "../assets/image/longshirt1.jpg"
import img2 from "../assets/image/cover2.jpg"
import img3 from "../assets/image/tshirt1.jpg"
import img4 from "../assets/image/shoes.jpg"

export default {
  name: "item-card-list",
  data() {
    return {
      imgs: [img1, img2, img3, img4],
    }
  },
  props: {},
  created() {},
  methods: {},
  computed: {},
  emits: [""],
  components: {},
}
</script>
