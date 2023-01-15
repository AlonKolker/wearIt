<template>
  <section class="header-conteiner-background">
    <div class="main-layout">
      <header class="main-layout header-conteiner">
        <router-link class="logo"  to="/">Wear-It</router-link>
        <!-- <div class="logo">Next</div> -->
        <div class="navigation-box">
          <nav class="nav" :class="{ show: isActive, hide: !isActive }">
            <!-- <a class="nav-link" href="#" @click="moveTo('shirts')" >Shirts</a> -->
            <router-link class="nav-link" @click="onOpen()" to="/shirts">Shirts</router-link>
            <!-- <span class="nav-link"  @click="moveTo('shirts')" >Shirts</span> -->
            <!-- <a class="nav-link" href="#" @click="moveTo('pants')">Pants</a> -->
            <router-link class="nav-link"  @click="onOpen()"  to="/pants">Pants</router-link>

            <!-- <a class="nav-link" href="#" @click="moveTo('shoes')">Shoes</a> -->
            <router-link class="nav-link"  @click="onOpen()"  to="/shoes">Shoes</router-link>

            <!-- <a class="nav-link" href="#" @click="moveTo('accsesories')">Accsesories</a> -->
            <router-link class="nav-link"  @click="onOpen()"  to="/accsesories">Accsesories</router-link>
          </nav>
          <a class="hamburger" href="#" @click="onOpen()"> <font-awesome-icon icon="fa-solid fa-bars" /> </a>
          <span class="closeHamburger" href="#" @click="onOpen()" :class="{ show: isActive, hide: !isActive }">
            <font-awesome-icon icon="fa-solid fa-xmark"
          /></span>
          <!-- <div class="shopping-cart-conteiner">
          <el-icon><ShoppingBag /></el-icon>
          <span>3</span>
        </div> -->
          <sideBar />
        </div>
      </header>
    </div>
  </section>
</template>

<script>
import sideBar from "./side-bar.vue"
export default {
  name: "app-header",
  data() {
    return {
      isActive: false,
    }
  },
  props: {},
  created() {},
  methods: {
    onOpen() {
      this.isActive = !this.isActive
    },
 
  },
  computed: {},
  emits: [""],
  components: { sideBar },
}
</script>
