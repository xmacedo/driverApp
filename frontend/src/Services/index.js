/* eslint-disable */ // --> OFF
/*const services = {
    getPergunta(pos){
        return perguntas[pos];
    },

    getPerguntas(){
        return perguntas;
    }
}*/
//import firebase from firebase
//
import app from '../key/configKey'
// Inicialize o Firebase Admin SDK com suas credenciais
console.log(app)
// Referência à base de dados Realtime do Firebase
/*const perguntas = []
// Obtém todas as perguntas
ref.once('value', (snapshot) => {
  const response = snapshot.val();
  
  if (response) {
    Object.keys(response).forEach((perguntaId, index) => {
        perguntas.push(response[perguntaId])
      //const pergunta = response[perguntaId];
      console.log(`Pergunta ${index + 1}: ${pergunta}`);
    });
  } else {
    console.log('Nenhuma pergunta encontrada no Firebase Realtime Database.');
  }

  // Encerra a conexão com o Firebase
  admin.app().delete();
});*/
// edn


/*const perguntas = [
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
]*/
export default services;