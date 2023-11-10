<template>
    <div class="opcoes">
        <h1 class="legenda">Pouco</h1>
        <label class="container">
            <input type="checkbox" name="checkbox" @click="selecionado(0)" v-model="resposta" id="btn1">
            <span class="checkmark opcao-1"></span>
        </label>
        <label class="container">
            <input type="checkbox" name="checkbox" @click="selecionado(1)" v-model="resposta" id="btn2">
            <span class="checkmark opcao-2"></span>
        </label>
        <label class="container">
            <input type="checkbox" name="checkbox" @click="selecionado(2)" v-model="resposta" id="btn3">
            <span class="checkmark opcao-3"></span>
        </label>
        <label class="container">
            <input type="checkbox" name="checkbox" @click="selecionado(3)" v-model="resposta" id="btn4">
            <span class="checkmark opcao-4"></span>
        </label>
        <h1 class="legenda-direita">Muito</h1>
    </div>
</template>

<script>
export default {
    name: 'EscalaResposta',

    emits: ['selecionado'],
    props: {
        valor: { type: Number, required: false }
    },
    data() {
        return {
            resposta: -1
        }
    },
    created() {
        this.resposta = this.valor
    },
    methods: {
        selecionado(valor) {
            this.$emit('selecionado', valor)
        }
    }
}
</script>

<style>
.opcoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    font-weight: bold;
}

.container {
    display: flex;
    flex-direction: row;
    position: relative;
    cursor: pointer;
    justify-content: center;
    margin: 0 0 5% 0;
}

/*    Hide the browser's default checkbox button */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom checkbox button */
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
/* .container:hover input~.checkmark {
    background-color: #ccc;
} */

.opcao-1 {
    border: 2px  green;
}

.container input:checked~.opcao-1 {
    background-color: green;
}

.opcao-2 {
    border: 2px  greenyellow;
}

.container input:checked~.opcao-2 {
    background-color: greenyellow;
}

.opcao-3 {
    border: 2px slid yellow;
}

.container input:checked~.opcao-3 {
    background-color: yellow;
}

.opcao-4 {
    border: 2px  orange;
}

.container input:checked~.opcao-4 {
    background-color: orange;
}

@media (max-width: 1200px) {
    .opcoes {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }

    .checkmark {
        position: relative;
        height: 50px;
        width: 150px;
        background-color: #fff;
        border-radius: 0%;
        display: flex;
        justify-content: space-between;
    }

    .container {
        display: flex;
        flex-direction: row;
        position: relative;
        cursor: pointer;
        justify-content: center;
        margin: 0;
    }

    h1.legenda {
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

    }

    h1.legenda-direita {
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }


}
</style>