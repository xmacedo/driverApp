<template>
    <div class="fundo" id="divFundo">
        <div class="w3-light-grey w3-round-large">
            <div class="w3-container w3-blue w3-round-large" id="progressBar" :style="moveBarra()"> ∘ </div>
        </div><br>

        <CaixaPergunta :pergunta="pergunta" @resposta="selecionado"></CaixaPergunta>


        <div class="botoes">
            <button :style="(visivelAnterior ? 'visibility: visible' : 'visibility: hidden')" class="botoes-pergunta"
                @click="perguntaAnterior">Pergunta anterior</button>
            <button id="botaoProximo" v-show="visivelProximo" class="botao-direita botoes-pergunta" disabled @click="perguntaProxima">Proxima
                pergunta</button>
            <button id="btnResultado" v-show="visivel3" class="botoes-pergunta" disabled @click="proximaTela">Ver resultados</button>

        </div>

    </div>
</template>

<script>
/* eslint-disable */
import {useRespostaStore} from '../stores'
import { onLog } from 'firebase/app';
import services from '../Services/index'
import CaixaPergunta from './CaixaPergunta.vue';
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
            tamanhoLista: services.getPerguntas().length,
            valoresRespondidos: [],
        };
    },
    created() {
        this.pergunta = services.getPergunta(this.idx);
        const store = useRespostaStore()
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
            this.pergunta = services.getPergunta(this.idx);
            document.getElementById('botaoProximo').disabled = true

        },
        perguntaProxima() {
            if (this.idx >= this.tamanhoLista - 2) {
                this.visivelProximo = false;
                this.visivel3 = true;
            }
            if (this.idx < this.tamanhoLista - 1) {
                this.idx++;
                this.pergunta = services.getPergunta(this.idx);
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
        salvaResposta(valor) {
            const store = useRespostaStore()
            if (store.$state.respostas[this.idx] != null) {
                store.$state.respostas[this.idx] = valor;
            } else {
                store.$state.respostas.push(valor);
            }
        },
        moveBarra() {
            var tamPercent = 100 / this.tamanhoLista;
            var percentAtual = tamPercent * (this.idx + 1);
            return 'width:' + percentAtual.toFixed(0) + "%";
        },
        selecionado(valor) {
            this.salvaResposta(valor)
            document.getElementById('botaoProximo').disabled = false
            if (this.idx >= this.tamanhoLista - 2) {
                document.getElementById('btnResultado').disabled = false
            }
            switch (valor) {
                case 0:
                    document.getElementById("divFundo").style.backgroundColor = "LimeGreen";

                    break;
                case 1:
                    document.getElementById("divFundo").style.backgroundColor = "LightGreen";

                    break;
                case 2:
                    document.getElementById("divFundo").style.backgroundColor = "Khaki";

                    break;
                case 3:
                    document.getElementById("divFundo").style.backgroundColor = "SandyBrown";

                    break;
                default:
                    break;
            }

        },
        proximaTela(){
            this.$router.push('/resultados')
            this.$emit('arrayResultados', this.valoresRespondidos)
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

.botoes-pergunta:disabled,.botoes-pergunta[disabled]{
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
