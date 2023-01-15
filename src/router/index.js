import { createRouter, createWebHashHistory } from "vue-router"

import categoryItems from "../views/category-items.vue"
import Home from "../views/home.vue"
import itemDeatails from "../views/item.vue"
import login from "../views/sign-login.vue"
import {userService} from "../services/user.service"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/:category", // this.$router.params.category
      name: "category",
      component: categoryItems,
         meta: {
        requiresAuth: false,
      },
    },

    // {
    //   path: '/category-items',
    //   name: 'Category-items',
    //   component: categoryItems
    // },
    {
      path: "/:category/:id",
      name: "item-deatails",
      component: itemDeatails,
         meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    // {
    //   path: '/details/:id',
    //   name: 'details',
    //   component: details
    // },
    // {
    //   path: '/edit/:id?',
    //   name: 'edit',
    //   component: edit
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: loginPage,
    // },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: signupPage,
    // },
  ],
})

router.beforeEach((to, from, next) => {
  const authenticatedUser = userService.getLoggedInUser();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Check for protected route
  if (requiresAuth && ! authenticatedUser) next('login')
  else next();
});

export default router
