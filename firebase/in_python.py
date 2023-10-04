import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("serviceAccountKey.json")
# Configure o Firebase Admin SDK com suas credenciais
firebase_admin.initialize_app(
    cred, {"databaseURL": "https://driverapp-a6350-default-rtdb.firebaseio.com"}
)

# Referência à base de dados Realtime do Firebase
ref = db.reference("perguntas")

# Obtém todas as perguntas
perguntas = ref.get()

if perguntas is not None:
    for indice, pergunta in enumerate(perguntas, start=1):
        print(f"Pergunta {indice}: {pergunta}")
        print("\n")
else:
    print("Nenhuma pergunta encontrada no Firebase Realtime Database.")
