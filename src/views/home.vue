<template>
  <section class="main-layout home-container">
    <div class="about">
      <h1 class="about-header">Hello! Nice to meet!<font-awesome-icon icon="fa-solid fa-handshake-simple" /></h1>
      <span class="about-body">
        My name is Alon Kolker and i am A passionate Full-stack/ Frontend developer who love spending time on new challenges and
        learning new technologies.</span
      >
      <span class="about-body"> This project was build with Vue 3, Vuex, ElementPlus and Scss.</span>
      <span class="about-body"></span>
      <div class="social-conteiner">
        <h3 class="social-container-header">Please Follow me:</h3>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/alon-kolker/"
            ><font-awesome-icon class="social-link" icon="fa-brands fa-linkedin"
          /></a>
          <a href="https://github.com/AlonKolker?tab=repositories"
            ><font-awesome-icon class="social-link" icon="fa-brands fa-square-github"
          /></a>
          <a href="https://alonkolker.github.io/Portfolio/" class="portfolio-link">
            <font-awesome-icon icon="fa-solid fa-paintbrush" />
            <span class="portfolio-text"> My Portfilio</span>
          </a>
        </div>
      </div>
    </div>
    <div class="categories">
      <category-card category="pants" />
      <category-card category="shirts" />
      <category-card category="shoes" />
      <category-card category="accsesories" />
    </div>
  </section>
  <carousel />
</template>

<script>

import categoryCard from "../cmps/category-card.vue"
import carousel from "../cmps/home-carousel.vue"

export default {
  name: "Home",
  computed: {},
  methods: {},
  components: {
    categoryCard,
    carousel,
  },
}
</script>
