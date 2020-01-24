<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Notes App</a>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" @click="logUserOut"> Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <br>
    </div>
    <div>
      <h1 class="ui centered header">Hello, {{ user.name }}</h1>
    </div>
    <div class="NotesApp">
      <NotesApp />
    </div>
  </div>
  
  
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
import NotesApp from "./NotesApp";
export default {
  data() {
    return {
      user: {}
    };
  },
  components: {
    NotesApp
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  },

  created() {
    this.getUserDetails();
  }
};
</script>

<style scoped></style>
