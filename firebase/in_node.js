const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Caminho para o arquivo de credenciais

// Inicialize o Firebase Admin SDK com suas credenciais
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://driverapp-a6350-default-rtdb.firebaseio.com' // Substitua pelo URL de sua base de dados Firebase
});

// Referência à base de dados Realtime do Firebase
const db = admin.database();
const ref = db.ref('perguntas');

// Obtém todas as perguntas
ref.once('value', (snapshot) => {
  const perguntas = snapshot.val();
  
  if (perguntas) {
    Object.keys(perguntas).forEach((perguntaId, index) => {
      const pergunta = perguntas[perguntaId];
      console.log(`Pergunta ${index + 1}: ${pergunta}`);
    });
  } else {
    console.log('Nenhuma pergunta encontrada no Firebase Realtime Database.');
  }

  // Encerra a conexão com o Firebase
  admin.app().delete();
});
