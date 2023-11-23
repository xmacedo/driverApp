<template>
    <TextoContrato/>
    <button @click="teste">teste</button>
</template>

<script>
import TextoContrato from '@/components/TextoContrato.vue';
import { appStore } from '@/main';
import firebaseServices from '@/Services/firebaseServices';
import services from '@/Services/services';

export default{
    name: 'ContratoView',
    components: {
        TextoContrato
    },
    methods:{
        teste(){
            let resultado = services.calculaResposta(appStore.respostas)
            services.getData()
            firebaseServices.salvaRespostaNoBanco(resultado)
        }
    }
}
</script>