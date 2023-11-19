<template>
    <div class="fundo" id="divFundo">
        <div class="w3-light-grey w3-round-large">
            <div class="w3-container w3-blue w3-round-large" id="progressBar" :style="moveBarra()"> ∘ </div>
        </div>

        <CaixaPergunta :pergunta="pergunta" @resposta="selecionado"></CaixaPergunta>

        <div class="botoes">
            <button :style="(visivelAnterior ? 'visibility: visible' : 'visibility: hidden')"
                class="botoes-pergunta esquerda" @click="perguntaAnterior">Pergunta anterior</button>
            <button id="botaoProximo" v-show="visivelProximo" class="direita botoes-pergunta" disabled
                @click="perguntaProxima">Proxima
                pergunta</button>
            <button id="btnResultado" v-show="visivel3" class="botoes-pergunta direita" disabled @click="proximaTela">Ver
                resultados</button>

        </div>

    </div>
</template>

<script>
/* eslint-disable */
import firebaseServices from '@/Services/firebaseServices';
import services from '../Services/services'
import CaixaPergunta from './CaixaPergunta.vue';
import { appStore } from '../main.js';
export default {
    name: 'TesteComponent',

    emits: ['arrayResultados'],
    components: {
        CaixaPergunta
    },
    data() {
        return {
            pergunta: '',
            idx: 0,
            visivelAnterior: false,
            visivelProximo: true,
            desabilitado: true,
            visivel3: false,
            tamanhoListaPerguntas: 0,
            valoresRespondidos: []
        };
    },
    created() {
        this.pergunta = appStore.perguntas[0][this.idx]
        this.tamanhoListaPerguntas = appStore.perguntas[0].length
    },
    methods: {
        perguntaAnterior() {
            this.limpaTela()
            if (this.idx <= 1) {
                this.visivelAnterior = false;
            }
            if (this.idx > 0) {
                this.idx--;
                this.visivelProximo = true;
                this.visivel3 = false;
            }
            this.pergunta = services.getPergunta(this.idx)
            document.getElementById('botaoProximo').disabled = true

        },
        perguntaProxima() {
            if (this.idx >= this.tamanhoListaPerguntas - 2) {
                this.visivelProximo = false;
                this.visivel3 = true;
            }
            if (this.idx < this.tamanhoListaPerguntas - 1) {
                this.idx++;
                this.pergunta = services.getPergunta(this.idx)
                this.visivelAnterior = true;
            }
            this.limpaTela();
            document.getElementById('botaoProximo').disabled = true
        },
        limpaTela() {
            document.getElementById("divFundo").style.backgroundColor = "SeaShell";
            document.getElementById("btn1").checked = false;
            document.getElementById("btn2").checked = false;
            document.getElementById("btn3").checked = false;
            document.getElementById("btn4").checked = false;
        },
        moveBarra() {
            var tamPercent = 100 / this.tamanhoListaPerguntas
            var percentAtual = tamPercent * (this.idx + 1);
            return 'width:' + percentAtual.toFixed(0) + "%";
        },
        selecionado(valor) {
            services.salvaResposta(valor, this.idx)
            document.getElementById('botaoProximo').disabled = false
            if (this.idx >= this.tamanhoListaPerguntas - 2) {
                document.getElementById('btnResultado').disabled = false
            }
            switch (valor) {
                case 0:
                    document.getElementById("btn1").checked = true;
                    document.getElementById("btn2").checked = false;
                    document.getElementById("btn3").checked = false;
                    document.getElementById("btn4").checked = false;
                    document.getElementById("divFundo").style.backgroundColor = "LimeGreen";

                    break;
                case 1:
                    document.getElementById("btn1").checked = true;
                    document.getElementById("btn2").checked = true;
                    document.getElementById("btn3").checked = false;
                    document.getElementById("btn4").checked = false;
                    document.getElementById("divFundo").style.backgroundColor = "LightGreen";

                    break;
                case 2:
                    document.getElementById("btn1").checked = true;
                    document.getElementById("btn2").checked = true;
                    document.getElementById("btn3").checked = true;
                    document.getElementById("btn4").checked = false;
                    document.getElementById("divFundo").style.backgroundColor = "Khaki";

                    break;
                case 3:
                    document.getElementById("btn1").checked = true;
                    document.getElementById("btn2").checked = true;
                    document.getElementById("btn3").checked = true;
                    document.getElementById("btn4").checked = true;
                    document.getElementById("divFundo").style.backgroundColor = "SandyBrown";

                    break;
                default:
                    break;
            }

        },
        proximaTela() {
            this.$router.push('/resultados')
            this.$emit('arrayResultados', this.valoresRespondidos)
        }
    }
}
</script>

<style scoped>
.fundo {
    background-color: SeaShell;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 100px;
    bottom: 0;
    transition: background-color 1s;
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
    flex-grow: 1;
    border-radius: 5%;
    background-color: white;
    border-color: #000000;
}

.esquerda {
    position: fixed;
    left: 0;
    bottom: 0;
}

.direita {
    position: fixed;
    right: 0;
    bottom: 0;
}

.botoes-pergunta:disabled,
.botoes-pergunta[disabled] {
    opacity: 35%;
}

.botoes-pergunta:hover {
    background-color: lightgray;
}

.w3-light-grey,
.w3-hover-light-grey:hover,
.w3-light-gray,
.w3-hover-light-gray:hover {
    color: #000 !important;
    background-color: #f1f1f1 !important
}

.w3-round-large {
    border-radius: 8px
}

.w3-container:after,
.w3-container:before,
.w3-container:after,
.w3-container:before {
    content: "";
    display: table;
    clear: both
}

.w3-container,
.w3-panel {
    padding: 0.01em 16px
}

.w3-blue,
.w3-hover-blue:hover {
    color: #fff !important;
    background-color: #2196F3 !important
}

@media (max-width: 1200px) {
    .botoes-pergunta {
        height: 100px;
        width: 100px;
    }

}
</style>
