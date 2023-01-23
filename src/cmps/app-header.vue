<template>
  <section class="header-conteiner-background">
    <div class="main-layout">
      <header class="main-layout header-conteiner">
        <router-link class="logo" to="/">Wear-It</router-link>
        <div class="navigation-box">
          <nav class="nav" :class="{ show: isActive, hide: !isActive }">
            <router-link class="nav-link" @click="onOpen()" to="/shirts">Shirts</router-link>
            <router-link class="nav-link" @click="onOpen()" to="/pants">Pants</router-link>
            <router-link class="nav-link" @click="onOpen()" to="/shoes">Shoes</router-link>
            <router-link class="nav-link" @click="onOpen()" to="/accsesories">Accsesories</router-link>
          </nav>
          <a class="hamburger" href="#" @click="onOpen()"> <font-awesome-icon icon="fa-solid fa-bars" /> </a>
          <span class="closeHamburger" href="#" @click="onOpen()" :class="{ show: isActive, hide: !isActive }">
            <font-awesome-icon icon="fa-solid fa-xmark"
          /></span>
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
