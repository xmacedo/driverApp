<template>
  <img class="img-fundo" src="../assets/fundo-vermelho.png" alt="">

  <div class="fundo centered">
    <p class="texto">Por favor, leia cada afirmativa e marque a resposta que indique quanto ela se aplicou a você durante a última semana.</p>
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



</style>
