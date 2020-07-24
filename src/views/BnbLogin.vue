<template>
  <section class>
    <div v-if="loggedInUser">
      <h1>Welcome {{loggedInUser.fullName}}</h1>
      <p>{{loggedInUser}}</p>
        
        <p>{{orders}}</p>
        {{getHostOrders}}
        {{getGuestOrders}}
      <!-- Orders per user -->

      <form class="flex column" @submit.prevent="doLogout">
        <button>Logout</button>
      </form>
    </div>
    <div v-else class="container">
      <h2>Login</h2>
      <form class="flex column" @submit.prevent="doLogin">
        <h4>{{msg}}</h4>
        <input type="text" v-model="loginCred.email" placeholder="Email" />
        <input type="password" v-model="loginCred.password" placeholder="Password" />
        <button>Login</button>
      </form>
      <h2>Signup</h2>
      <form class="flex column" @submit.prevent="doSignup">
        <input type="text" v-model="signupCred.email" placeholder="Email" />
        <input type="password" v-model="signupCred.password" placeholder="Password" />
        <h4>{{msg}}</h4>
        <button>Signup</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      currUser:'',
      allOrders:'',
      guestOrders:'',
      ownerOrders:'',

      loginCred: {},
      signupCred: {},
      msg: "",
      userToEdit: {}
    };
  },
  computed: {
    loggedInUser() {
      const user = this.$store.getters.loggedInUser;
      this.currUser = user
      return user
    },
    orders() {
        const orders = this.$store.getters.orders;
        this.allOrders = orders;
        return orders
    },

    getHostOrders(){
      const orders = this.allOrders.filter(order => order.host.id === this.currUser._id)
      return orders
    },
    getGuestOrders(){
      const orders = this.allOrders.filter(order => order.guest.id === this.currUser._id)
      console.log('host orders::::' ,orders);
      return orders
    }
  },
  created() {
    console.log("this.loggedInUser", this.loggedInUser);
    this.$store.dispatch({ type: "loadOrders"});
  },
  mounted() {
    console.log("Orders (all):", this.orders);
  },
  methods: {
    async doLogin() {
      const cred = this.loginCred;
      if (!cred.email || !cred.password)
        return (this.msg = "Please enter user/password");
      await this.$store.dispatch({ type: "login", userCred: cred });
      this.loginCred = {};
    },
    async doLogout() {
      await this.$store.dispatch({ type: "logout"});
      this.loginCred = {};
    },
    doSignup() {
      const cred = this.signupCred;
      if (!cred.email || !cred.password)
        return (this.msg = "Please fill up the form");
      this.$store.dispatch({ type: "signup", userCred: this.signupCred });
    }
  }
};
</script>

<style>
</style>