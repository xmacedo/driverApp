/* eslint-disable */ // --> OFF

// Inicialize o Firebase Admin SDK com suas credenciais
import useAppStore from "@/stores";

const services = {
  salvaResposta(valor, idx){
    const appStore = useAppStore();
    if(appStore.respostas[idx] != null){
      appStore.respostas[idx] = valor;
    } else {
      appStore.respostas.push(valor)
    }
  },

  getPergunta(idx){
    const appStore = useAppStore();

    
    return appStore.perguntas[0][idx];

  },

  calculaResposta(array) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
      resultado = resultado + array[i];
    }

    return resultado
  },
  calculaDepressao(array) {
    let pontuacao = ''
    let resultado = this.calculaResposta(array)
    if (resultado < 4) {
      pontuacao = 'Normal'
    } else if (resultado < 6) {
      pontuacao = 'Leve'
    } else if (resultado < 10) {
      pontuacao = 'Moderado'
    } else if (resultado < 13) {
      pontuacao = 'Forte'
    } else {
      pontuacao = 'Extremamente grave'
    }
    return pontuacao
  },
  calculaAnsiedade(array) {
    let pontuacao = ''
    let resultado = this.calculaResposta(array)
    if (resultado < 3) {
      pontuacao = 'Normal'
    } else if (resultado < 5) {
      pontuacao = 'Leve'
    } else if (resultado < 7) {
      pontuacao = 'Moderado'
    } else if (resultado < 9) {
      pontuacao = 'Forte'
    } else {
      pontuacao = 'Extremamente grave'
    }
    return pontuacao
  },
  calculaEstresse(array) {
    let pontuacao = ''
    let resultado = this.calculaResposta(array)
    if (resultado < 7) {
      pontuacao = 'Normal'
    } else if (resultado < 9) {
      pontuacao = 'Leve'
    } else if (resultado < 12) {
      pontuacao = 'Moderado'
    } else if (resultado < 16) {
      pontuacao = 'Forte'
    } else {
      pontuacao = 'Extremamente grave'
    }
    return pontuacao
  },
  
}

/* 
const perguntas = [
    "Achei difícil me acalmar",
    "Senti minha boca seca",
    "Não consegui sentir nenhum sentimento positivo",
    "Tive dificuldade em respirar mesmo sem ter feito nenhum esforço físico (ex. respiração ofegante, falta de ar)",
    "Achei difícil ter vontade de fazer as coisas",
    "Reagi de forma exagerada às situações",
    "Senti tremores (ex. nas mãos)",
    "Me senti nervoso",
    "Me preocupei com situações em que eu pudesse entrar em pânico e perder o controle",
    "Senti que não tinha nada a desejar",
    "Me senti agitado",
    "Achei difícil relaxar",
    "Me senti triste e sem ânimo",
    "Fui intolerante/impaciente com as coisas que me impediam de continuar o que eu estava fazendo",
    "Senti que ia entrar em pânico",
    "Não consegui me entusiasmar com nada",
    "Senti que não tinha valor como pessoa",
    "Senti que estava um pouco emotivo/sensível demais",
    "Sabia que meu coração estava alterado mesmo não tendo feito nenhum esforço físico (ex. aumento da frequência cardíaca, descompasso no ritmo cardíaco)",
    "Senti medo sem motivo",
    "Senti que a vida não tinha sentido"
] */
export default services;