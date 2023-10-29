<template>
    <div class="fundo" id="divFundo">
        <div class="w3-light-grey w3-round-large">
            <div class="w3-container w3-blue w3-round-large" id="progressBar" style="width:0%"> ∘ </div>
        </div><br>
        <div class="caixa-pergunta">
            <div>
                <h2 class="caixa-pergunta-texto">{{ pergunta }}</h2>
            </div>
            <div class="opcoes">
                <h1 class="legenda">Pouco</h1>
                <label class="container">
                    <input type="radio" name="radio" @click="selecionado1" id="btn1">
                    <span class="checkmark opcao-1"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio" @click="selecionado2" id="btn2">
                    <span class="checkmark opcao-2"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio" @click="selecionado3" id="btn3">
                    <span class="checkmark opcao-3"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio" @click="selecionado4" id="btn4">
                    <span class="checkmark opcao-4"></span>
                </label>

                <h1 class="legenda-direita">Muito</h1>
            </div>
        </div>

        <div class="botoes">
            <button v-show="visivelAnterior" class="botoes-pergunta" @click="perguntaAnterior">Pergunta anterior</button>
            <button v-show="visivelProximo" class="botoes-pergunta" @click="perguntaProxima">Proxima pergunta</button>
            <button v-show="visivel3"  class="botoes-pergunta" @click="$router.push('/about')">Ver resultados</button>

        </div>

    </div>
</template>

<script>
/* eslint-disable */
import services from '../Services/index'
export default {
    name: 'TesteComponent',

    data() {
        return {
            pergunta: '',
            idx: 0,
            visivelAnterior: false,
            visivelProximo: true,
            visivel3: false,
            tamanhoLista: services.getPerguntas().length
        }
    },
    created() {
        this.pergunta = services.getPergunta(this.idx)
    },
    methods: {
        perguntaAnterior() {
            this.limpaTela();

            if (this.idx <= 1) { this.visivelAnterior = false }

            if (this.idx > 0) {
                this.idx--
                this.visivelProximo = true
                this.visivel3 = false

            }
            this.pergunta = services.getPergunta(this.idx)
            this.moveBarra();
        },
        perguntaProxima() {
            this.limpaTela();

            if (this.idx >= services.getPerguntas().length - 2) {
                this.visivelProximo = false
                this.visivel3 = true
            }

            if (this.idx < services.getPerguntas().length - 1) {
                this.idx++
                this.pergunta = services.getPergunta(this.idx)
                this.visivelAnterior = true
            }

            this.moveBarra();

        },
        limpaTela() {
            document.getElementById("divFundo").style.backgroundColor = "SeaShell";
            document.getElementById("btn1").checked = false;
            document.getElementById("btn2").checked = false;
            document.getElementById("btn3").checked = false;
            document.getElementById("btn4").checked = false;
        },

        moveBarra() {
            var tamPercent = 100 / this.tamanhoLista;
            var percentAtual = tamPercent * (this.idx + 1);
            document.getElementById("progressBar").style.width = percentAtual + "%";
        },
        selecionado1() {
            document.getElementById("divFundo").style.backgroundColor = "LimeGreen";
        },
        selecionado2() {
            document.getElementById("divFundo").style.backgroundColor = "LightGreen";

        },
        selecionado3() {
            document.getElementById("divFundo").style.backgroundColor = "Khaki";
        },
        selecionado4() {
            document.getElementById("divFundo").style.backgroundColor = "SandyBrown";
        }

    }
}
</script>

<style>
.fundo {
    background-color: SeaShell;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 100px;
    bottom: 0;
}

.caixa-pergunta {
    border-radius: 16px;
    background-color: SeaShell;
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
    font-weight: 400;
    font-size: 3rem;
    display: flex;
    justify-content: center;

}

div.opcoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

div.botoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.invisible {
    visibility: hidden;
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
    margin-left: 3%;
}

h1.legenda-direita {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 5%;
    margin-right: 3%;
    color: orange;
}

.container {
    display: flex;
    flex-direction: row;
    position: relative;
    cursor: pointer;
    justify-content: center;
    margin: 0 0 5% 0;
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


.w3-light-grey,
.w3-hover-light-grey:hover,
.w3-light-gray,
.w3-hover-light-gray:hover {
    color: #000 !important;
    background-color: #f1f1f1 !important
}

.w3-round-small {
    border-radius: 2px
}

.w3-round,
.w3-round-medium {
    border-radius: 4px
}

.w3-round-large {
    border-radius: 8px
}

.w3-round-xlarge {
    border-radius: 16px
}

.w3-round-xxlarge {
    border-radius: 32px
}

.w3-container:after,
.w3-container:before,
.w3-panel:after,
.w3-panel:before,
.w3-row:after,
.w3-row:before,
.w3-row-padding:after,
.w3-row-padding:before,
.w3-container:after,
.w3-container:before,
.w3-panel:after,
.w3-panel:before,
.w3-row:after,
.w3-row:before,
.w3-row-padding:after,
.w3-row-padding:before,
.w3-cell-row:before,
.w3-cell-row:after,
.w3-clear:after,
.w3-clear:before,
.w3-bar:before,
.w3-bar:after {
    content: "";
    display: table;
    clear: both
}

.w3-container,
.w3-panel {
    padding: 0.01em 16px
}

.w3-panel {
    margin-top: 16px;
    margin-bottom: 16px
}

.w3-blue,
.w3-hover-blue:hover {
    color: #fff !important;
    background-color: #2196F3 !important
}

.w3-blue-grey,
.w3-hover-blue-grey:hover,
.w3-blue-gray,
.w3-hover-blue-gray:hover {
    color: #fff !important;
    background-color: #607d8b !important
}

@media (max-width: 1200px) {

    .caixa-pergunta {
        width: 100%;
        height: 35%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 50%;
        margin-bottom: 50%;

    }

    .caixa-pergunta-texto {
        position: relative;
        top: 0;
        font-weight: 400;
        font-size: 1rem;
        display: flex;
        justify-content: center;

    }

    .checkmark {
        position: relative;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: space-between;
    }


}
</style>
