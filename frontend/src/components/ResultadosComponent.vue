<template>
    <h1> Resultados</h1>
    <div class="fundo">
        <TabelaPontuacao></TabelaPontuacao>

        <div class="resultados">
            <div class="resultado-individual">
                <h1>Depressão</h1>
                <h1>{{ pontuacaoDepressao }}</h1>
            </div>
            <div class="resultado-individual">
                <h1>Ansiedade</h1>
                <h1>{{ pontuacaoAnsiedade }}</h1>
            </div>
            <div class="resultado-individual">
                <h1>Estresse</h1>
                <h1>{{ pontuacaoEstresse }}</h1>
            </div>
        </div>


    </div>
</template>

<script>
import { appStore } from '../main.js';
import services from '../Services/services'
import TabelaPontuacao from './TabelaPontuacao.vue';

export default {
    name: 'ResultadosComponent',

    components: {
        TabelaPontuacao
    },

    data() {
        return {
            resultados: [],
            pontuacaoDepressao: '',
            pontuacaoAnsiedade: '',
            pontuacaoEstresse: ''
        }
    },
    created() {
        this.resultados = appStore.respostas
        this.pontuacaoDepressao = services.calculaDepressao(this.resultados)
        this.pontuacaoAnsiedade = services.calculaAnsiedade(this.resultados)
        this.pontuacaoEstresse = services.calculaEstresse(this.resultados)

    },

    methods: {

    },

}
</script>

<style scoped>
.fundo {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.resultados {
    padding-top: 5%;
    padding-left: 5%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}

.resultado-individual {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 2px solid #000000;
    border-radius: 5%;
}

@media (max-width: 1200px) {
    .fundo {
        flex-direction: column;
    }

    .resultados {
        padding-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

    }
}
</style>