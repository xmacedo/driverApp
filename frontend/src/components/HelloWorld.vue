<template>
  <img class="img-fundo" src="../assets/fundo-vermelho.png" alt="">

  <div class="fundo centered">
    <p class="texto">Por favor, leia cada afirmativa e marque a resposta que indique quanto ela se aplicou a você durante a última semana.</p>
  </div>

  <div class="apresentacao__botao">
  <router-link to="/teste">Inicar Teste</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-fundo {
    width: 100%;
    height: 300px;
}

.centered {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

div.fundo {
  margin: 30px;
  background-color: gray;
  border: 1px solid black;
  border-radius: 16px;
  height: 200px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}

p.texto {
    margin: 5%;
    font-size: 28px;
    font-weight: bold;
    color: #000000;
}

.apresentacao__botao {
    display: flex;
    margin: 100px;
    flex-direction: column;
    align-items: center;
}

.apresentacao__botao__texto {
    color: black;
    width: 20%;
    text-align: center;
    border-radius: 8px;
    font-size: 1.5rem;
    padding: 21px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    border: 2px solid var(--cor-primaria);
    display: flex;
    justify-content: center;
    gap: 10px;
}

.apresentacao__botao__texto:hover {
    background-color: var(--cor-primaria);
    color: white;
}

</style>
