<template>
    <div class="menu">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/user-list">User List</router-link>
      <router-link to="/map">Map</router-link>
    </div>
  <router-view></router-view>

  
</template>

<script>


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // UserList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.menu {
    display: flex;
    justify-content: space-around;
    background-color: #f1f1f1;
    padding: 10px 0;
  }
  .menu a {
    text-decoration: none;
    color: #333;
    padding: 5px 10px;
    border-bottom: 2px solid transparent;
  }
  .menu a.router-link-exact-active {
    border-bottom-color: #007bff;
    font-weight: bold;
  }
</style>
