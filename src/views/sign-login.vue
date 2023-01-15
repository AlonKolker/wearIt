<template>
  <section class="sign-login-container">
    <div class="sign-login">
      <div style="margin: 20px" />
      <el-form label-position="top" label-width="100px" style="max-width: 460px">
        <el-form-item label="Name">
          <el-input v-model="user.name" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="user.passWord" />
        </el-form-item>
        <el-form-item v-if="!isLogin" label="E-mail">
          <el-input v-model="user.email" />
        </el-form-item>
        <div v-if="missingField">Please Fill the empty fields</div>
      </el-form>
      <el-button v-if="isLogin" @click="onLogIn" :disabled="!user.name || !user.passWord" :title="check" type="primary">Login</el-button>
      <el-button v-else  :disabled="!user.name || !user.passWord || !user.email " type="primary">Register</el-button>
    </div>
    <span v-if="isLogin">Dont have an account? <button @click="isLogin = !isLogin">Register!</button></span>
    <span v-else>Have an account? <button @click="isLogin = !isLogin">Login!</button></span>
  </section>
</template>

<script>
// import categoryCard from '../cmps/category-card.vue'
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
      missingField: false,
    }
  },
  computed: {check(){
    if(!this.user.name || !this.user.passWord) return 'Please fill the missing fields'
     return 'Enter'
  }},
  methods: {
    onLogIn() {
      console.log('onLogIn',this.user)
      // let isDone = true
      // for (const property in this.user) {
      //   if(property === 'email') return 
      //   isDone = this.user[property] === "" ? false : true
      //   if (!isDone) {
      //     this.missingField = true
      //     return
      //   }
      // }
      // if (this.missingField) {
      //   console.log("missingField:", this.missingField)
      //   return
      // }
      console.log('onLogIn',this.user)

      this.missingField = false
      let currUser = this.user
      // delete currUser.email
      // console.log('currUser:',currUser)
      userService.login(currUser)
      // console.log('session:',userService.getLoggedInUser())
      this.$store.dispatch({ type: "setCurrUser",currUser })
      this.$router.push('/')
    },
  },
  components: {},
}
</script>
