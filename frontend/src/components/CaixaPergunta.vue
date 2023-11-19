<template>
    <div class="caixa-pergunta">
        <div>
            <h2 class="caixa-pergunta-texto">{{ pergunta }}</h2>
        </div>
        <EscalaResposta @selecionado="selecionado"></EscalaResposta>

    </div>
</template>

<script>
import EscalaResposta from './EscalaResposta.vue';
export default {
    name: 'CaixaPergunta',

    emits: ['resposta'],

    components: {
        EscalaResposta
    },
    props: {
        pergunta: String
    },
    methods: {
        selecionado(valor) {
            this.$emit('resposta', valor)
        }
    }
}
</script>

<style scoped>
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

@media (max-width: 1200px) {

    .caixa-pergunta {
        border-radius: 16px;
        background-color: transparent;
        border: 2px solid #000000;
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 5% auto;

        border: 0px;

    }

    .caixa-pergunta-texto {
        position: relative;
        font-weight: bold;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;

    }

}
</style>