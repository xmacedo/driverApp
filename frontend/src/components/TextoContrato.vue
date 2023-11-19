<template>
    <div class="fundo">
        <div class="fundo-texto">
            <h1 class="texto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914 translation by H. Rackham.</h1>
        </div>

        <div class="apresentacao-checkbox">
            <input type="checkbox" class="checkbox" @click="checado">
            <h1 class="texto">Li e aceito os termos de uso do aplicativo</h1>
        </div>


        <div class="apresentacao-botao">
            <button id="btnProsseguir" disabled class="botao" @click="$router.push('/home')">Prosseguir</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TextoContrato',

    data() {
        return {
            desabilitado: true
        }
    },

    methods: {
        checado() {
            this.desabilitado = !this.desabilitado
            document.getElementById('btnProsseguir').disabled = this.desabilitado
        }
    }

}
</script>

<style scoped>
.fundo {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.fundo-texto {
    background-color: lightgray;
    width: 45%;
    border: 3px solid black;
    border-radius: 5%;
    margin-left: 25%;
}

.texto{
    font-size: 2rem;
}

.apresentacao-checkbox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 3%
}

.apresentacao-botao {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.botao {
    color: black;
    text-align: center;
    border-radius: 5%;
    font-size: 1.5rem;
    padding: 3%;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    border-style: solid;
    border: 5% solid black;
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
}

.botao[disabled] {
    opacity: 35%;
}

.checkbox {
    width: 35px;
    height: 35px;
    margin-right: 2%;
}

@media (max-width: 1200px) {
    .fundo-texto {
        width: 90%;
        border-radius: 0%;
        margin-left: 5%;
    }

    .texto{
        font-size: 1.5rem;
    }
    
    .checkbox{
        width: 70px;
        height: 70px;
    }

    .botao{
        margin-bottom: 6%;
    }
}
</style>