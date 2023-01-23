<template>
  <div class="block text-center category-carousel">
    <span class="demonstration">Realted products</span>
    <el-carousel height="250px">
      <el-carousel-item class="carousel-img-box" v-for="img in imgs" :key="img">
         <img class="carousel-img" :src=img  alt="" /> 
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

import img1 from "../assets/image/longshirt.jpg"
import img2 from "../assets/image/shos1.jpg"
import img3 from "../assets/image/tshirt1.jpg"

export default {
  name: "category-carousel",
  data() {
    return {
      imgs: [img1, img2, img3],
    }
  },
  computed: {},
  methods: {},
  components: {  },
}
</script>


