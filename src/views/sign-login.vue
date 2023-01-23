<template>
  <section class="sign-login-container">
    <div class="sign-login">
      <div style="margin: 20px" />
      <el-form label-position="top" label-width="100px" style="max-width: 460px">
        <el-form-item v-if="!isLogin" label="Name">
          <el-input v-model="user.name" />
        </el-form-item>
        <el-form-item label="E-mail">
          <el-input v-model="user.email" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="user.passWord" />
        </el-form-item>
      </el-form>
      <el-button v-if="isLogin" @click="onLogIn" :disabled="!user.email || !user.passWord" :title="check" type="primary"
        >Login</el-button
      >
      <el-button v-else @click="onRegister" :disabled="!user.name || !user.passWord || !user.email" :title="check" type="primary"
        >Register</el-button
      >
    </div>
    <span v-if="isLogin">Dont have an account? <button @click="isLogin = !isLogin">Register!</button></span>
    <span v-else>Have an account? <button @click="isLogin = !isLogin">Login!</button></span>
  </section>
</template>

<script>
import { userService } from "../services/user.service"

export default {
  name: "sign-login",
  data() {
    return {
      user: {
        name: "",
        passWord: "",
        email: "",
      },
      isLogin: true,
      lastPath: null,
    }
  },
  created() {
    this.lastPath = this.$router.options.history.state.back
    console.log(this.lastPath)
  },
  computed: {
    check() {
      if (this.isLogin) {
        if (!this.user.name || !this.user.passWord) return "Please fill the missing fields"
        return "Enter"
      } else {
        if (!this.user.name || !this.user.passWord || !this.user.email) return "Please fill the missing fields"
        return "Enter"
      }
    },
  },
  methods: {
    onLogIn() {
      let currUser = this.user

      let users = this.$store.getters.users

      let isVerify = users.some((user) => user.email === currUser.email)

      if (!isVerify) return

      userService.login(currUser)

      this.$store.dispatch({ type: "setCurrUser", currUser })
      this.$router.push("/")
    },
    onRegister() {
      let currUser = this.user

      userService.login(currUser)

      this.$store.dispatch({ type: "setCurrUser", currUser })
      
      if (this.lastPath) {
        this.$router.push(this.lastPath)
        return
      }
      this.$router.push("/")
    },
  },
  components: {},
}
</script>
