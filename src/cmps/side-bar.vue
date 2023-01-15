<template>
  <section class="side-bar-container">
    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
      <div class="shopping-cart-conteiner">
        <el-icon><ShoppingBag /></el-icon>
        <span>{{ itemInBag }}</span>
      </div>
    </el-button>

    <el-drawer class="side-bar" v-model="drawer" :size="sideBarSize">
      <h1 class="bag-title">Shpooing Bag</h1>
      <div class="bag-item-preview-conteiner">
        <el-scrollbar>
          <bag-item-preview v-for="item in bag" :item="item" />
        </el-scrollbar>
      </div>
      <div v-if="totalPrice !== 0" class="total">
        <span class="total-lable">Total</span>
        <span class="total-price">{{ totalPrice }}$</span>
      </div>
      <h1 v-else class="bag-fotter">Bag is empty, start shpooing!</h1>

      <div v-if="totalPrice !== 0 && currUser" @click="openWhenLogin" class="chackout-btn">Checkout</div>
      <div v-else-if="!currUser && totalPrice !== 0" @click="openWhenNoLogin" class="chackout-btn">Checkout</div>
    </el-drawer>
  </section>
</template>

//
<script>
import bagItemPreview from "./bag-item-preview.vue"
import { ElMessage, ElMessageBox } from "element-plus"

export default {
  name: "side-bar",
  // props: { employee: Object },
  data() {
    return {
      drawer: false,
      windowWidth: window.innerHeight,
    }
  },
  created() {},

  methods: {
    goToInfoPage() {
      // this.$router.push(`/employee/${this.employee._id}`)
    },
    openWhenLogin() {
      ElMessageBox.alert("This is not a real Commercial site 😁", "Notice", {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: "OK, i got it",
        callback: (action) => {
          ElMessage({
            type: "info",
            message: `action: ${action}`,
          })
        },
      })
    },
    openWhenNoLogin() {
      ElMessageBox.confirm("You need to log in to checkout, Do you want to do it now?", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          ElMessage({
            type: "success",
            message: "Wear it out 😎",
          })
          this.drawer = false
          this.$router.push("/login")
        })
        .catch(() => {
          this.onAddToBag()
          ElMessage({
            type: "info",
            message: "Continue as a Guest",
          })
        })
    },
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    bag() {
      console.log(this.$store.getters.bag)
      return this.$store.getters.bag
    },
    totalPrice() {
      console.log("sdfsdgf")
      console.log("sidebar:", this.$store.getters.totalPrice)
      return this.$store.getters.totalPrice
    },
    itemInBag() {
      return this.$store.getters.bag.length
    },
    sideBarSize() {
      if (this.windowWidth < 700) return "100%"
      if (this.windowWidth < 900) return "50%"
      return "30%"
    },
    currUser() {
      return this.$store.getters.currUser
    },
  },
  emits: [""],
  components: { bagItemPreview },
}
</script>

<!-- <script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script> -->
