<template>
  <section class="main-layout item-container" v-if="item">
    <div class="item-box">
      <div class="item">
        <div class="img-container">
          <img :src="item.img" alt="" />
        </div>
        <div>
          <span class="item-title"> {{ item.title }} - {{ item.price }}$</span>
          <item-form  :item="item" />
          <description />
        </div>
      </div>
    </div>
    <categoryCarousel />
  </section>
</template>

<script>

import categoryCarousel from "../cmps/category-carousel.vue"
import {shopService} from "../services/shop.service"
import itemForm from "../cmps/elplus-input.vue"
import description from "../cmps/elplus-description.vue"

export default {
  name: "category",
  data() {
    return {
      cloths: null,
      item:null,
    }
  },
  created() {
    let id = this.$route.params.id
    this.item = shopService.getItemById(id)[0]
    console.log(this.item)
  },
  computed: {},
  methods: {},
  components: { categoryCarousel, itemForm, description },
}
</script>
