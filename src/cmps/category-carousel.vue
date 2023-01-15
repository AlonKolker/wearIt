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

<style scoped>
.demonstration {
  display: flex;
  flex-direction: column;
  color: var(--el-text-color-secondary);
  text-align: center;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
