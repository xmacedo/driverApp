<template>
  <div class="home">
    <HelloWorld/>
    <div class="apresentacao__botao">
    <router-link to="/teste" class="apresentacao__botao__texto">Inicar Teste</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.apresentacao__botao {
    display: flex;
    margin: 100px;
    flex-direction: column;
    align-items: center;
}

.apresentacao__botao__texto {
    color: black;
    width: 10%;
    text-align: center;
    border-radius: 5%;
    font-size: 1.5rem;
    padding: 5%;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    border: 2% solid red;
    display: flex;
    justify-content: center;
    gap: 5%;
}

.apresentacao__botao__texto:hover {
    background-color:red;
    color: white;
}

</style>