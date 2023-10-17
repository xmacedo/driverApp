<template>
    <div class="fundo">
        <div class="centered caixa-pergunta">
            <div>
                <h2 class="caixa-pergunta-texto">{{ pergunta }}</h2>
            </div>
            <div class="opcoes">
                <h1 class="legenda">Pouco</h1>
                <label class="container">
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark opcao-1"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio">
                    <span class="checkmark opcao-2"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio">
                    <span class="checkmark opcao-3"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio">
                    <span class="checkmark opcao-4"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio">
                    <span class="checkmark opcao-5"></span>
                </label>
                <h1 class="legenda-direita">Muito</h1>
            </div>
        </div>

        <div class="botoes">
            <button class="botoes-pergunta" @click="perguntaAnterior">Pergunta anterior</button>
            <button class="botoes-pergunta" @click="perguntaProxima">Proxima pergunta</button>

        </div>

    </div>
</template>

<script>
/* eslint-disable */
import services from '../Services'
export default {
  name: 'TesteComponent',

  data () {
    //perguntaProxima();
    return {
      pergunta: '',
      idx: 0
    }
  },
  created () {
      this.pergunta = services.getPergunta(this.idx)
  },
  methods: {  
    perguntaAnterior () {
      if(this.idx > 0){
        this.idx--
      }
      this.pergunta = services.getPergunta(this.idx)
    },
    perguntaProxima () {
      if(this.idx < services.getPerguntas().length){
        this.idx++
      }
      this.idx++
      this.pergunta = services.getPergunta(this.idx)

    }
  }
}
</script>

<style>
.fundo {
    background-color: gray;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 100px;
    bottom: 0;
}

.caixa-pergunta {
    border-radius: 16px;
    border: 2px solid #000000;
    width: 70%;
    height: 35%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin: 5% auto;

}

.caixa-pergunta-texto {
    position: relative;
    top: 0;
    font-family: 'Krona One', 'sans-serif';
    font-weight: 400;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;

}

div.opcoes {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

div.botoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.botoes-pergunta {
    height: 100px;
    width: 300px;
    margin: 5% 15%;
    border-radius: 5%;
    background-color: white;
    border-color: #000000;
}

.botoes-pergunta:hover {
    background-color: lightgray;
}

h1.legenda {
    display: flex;
    justify-content: center;
    text-align: center;
    color: green;
}

h1.legenda-direita {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 5%;
    color: red;
}

.container {
    display: flex;
    flex-direction: row;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    justify-content: center;
}

/*    Hide the browser's default radio button */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: relative;
    height: 100px;
    width: 100px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: space-between;
}

/* On mouse-over, add a grey background color */
.container:hover input~.checkmark {
    background-color: #ccc;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked~.checkmark:after {
    display: block;
}

.opcao-1 {
    border: 2px solid green;
}

.container input:checked~.opcao-1 {
    background-color: green;
}

.opcao-2 {
    border: 2px solid greenyellow;
}

.container input:checked~.opcao-2 {
    background-color: greenyellow;
}

.opcao-3 {
    border: 2px solid yellow;
}

.container input:checked~.opcao-3 {
    background-color: yellow;
}

.opcao-4 {
    border: 2px solid orange;
}

.container input:checked~.opcao-4 {
    background-color: orange;
}

.opcao-5 {
    border: 2px solid red;
}

.container input:checked~.opcao-5 {
    background-color: red;
}
</style>
