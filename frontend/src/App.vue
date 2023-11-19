<template>
  <nav>
    <div class="logo">
      <a href="">
        <img src="./assets/logo-driver-life.svg" alt="Logo" class="logo-imagem">
      </a>
      <h1 class="titulo-app">Driver Life</h1>
    </div>

    <a href="" class="login">Login</a>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

div.logo {
  display: flex;
  flex-direction: row;
}

.logo-imagem {
  margin-right: 3%;
  text-align: center;
  line-height: 65px;
  
}

.titulo-app{
  margin-left: 2%;
  width: 5%;
}

.login {
  border: 2px solid black;
  text-align: center;
  padding: 1.5% 3%;
  border-radius: 16px;
  background-color: darkred;
  color: white;
  margin-right: 3%;
}

.login:hover{
  color: black;
}
</style>
