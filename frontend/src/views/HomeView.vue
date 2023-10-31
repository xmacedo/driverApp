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


</style>