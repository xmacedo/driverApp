<template>
  <img class="img-fundo" src="../assets/fundo-vermelho.png" alt="">

  <div class="fundo centered">
    <p class="texto">Por favor, leia cada afirmativa e marque a resposta que indique quanto ela se aplicou a você durante
      a última semana.</p>
  </div>
  <div class="apresentacao__botao">
    <button class="apresentacao__botao__texto" @click="$router.push('/teste')">Iniciar teste</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

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
  margin-top: 10%;
}

.apresentacao__botao__texto {
  color: black;
  text-align: center;
  border-radius: 5%;
  font-size: 1.5rem;
  padding: 3%;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  border-style: solid;
  border: 5% solid black;
  display: flex;
  justify-content: center;
  gap: 5%;
}

.apresentacao__botao__texto:hover {
  background-color: darkred;
  color: white;
}

@media (max-width: 1200px) {

  div.fundo {
  margin: 30px;
  background-color: gray;
  border: 1px solid black; 
  border-radius: 16px;
  height: 30%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
}

.centered {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  left: 42%;
}

p.texto {
  margin: 5%;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

.apresentacao__botao {
  display: flex;
  margin: 100px;
  flex-direction: column;
  align-items: center;
  margin-top: 35%;
}


}

</style>
