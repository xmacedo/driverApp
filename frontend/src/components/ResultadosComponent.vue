<template>
    <h1> Resultados</h1>
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
    {{ resultadoFinal }}
</template>

<script>
import { useRespostaStore } from '../stores'
import services from '../Services/index'

export default {
    name: 'ResultadosComponent',

    data() {
        return {
            resultados: [],
            pontuacaoDepressao: '',
            pontuacaoAnsiedade: '',
            pontuacaoEstresse: ''
        }
    },
    created() {
        const store = useRespostaStore()
        this.resultados = store.$state.respostas
        this.pontuacaoDepressao = services.calculaDepressao(this.resultados)
        this.pontuacaoAnsiedade = services.calculaAnsiedade(this.resultados)
        this.pontuacaoEstresse = services.calculaEstresse(this.resultados)

    },

    methods: {

    },

}
</script>

<style>
.resultados {
    padding-top: 5%;
    display: flex;
    justify-content: space-evenly;
}

.resultado-individual{
    display: flex;
    flex-direction: column;
}
</style>