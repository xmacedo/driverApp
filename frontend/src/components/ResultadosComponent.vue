<template>
    <h1> Resultados</h1>
    {{ resultados }}
</template>

<script>
import { useRespostaStore } from '../stores'
import services from '../Services/index'

export default {
    name: 'ResultadosComponent',

    data() {
        return {
            resultados: []
        }
    },
    created(){
        const store = useRespostaStore()
        this.resultados = store.$state.respostas
        console.log(services.calculaResposta(this.resultados));
    },

    methods: {

    },

}
</script>