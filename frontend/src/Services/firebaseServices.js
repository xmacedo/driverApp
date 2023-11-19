import { dbRef } from "../key/configKey"
import { child, get } from "firebase/database";
import useAppStore from "@/stores";
const firebaseServices = {

    getPerguntas() {
        const appStore = useAppStore()
        get(child(dbRef, `perguntas/`)).then((snapshot) => {
            if (snapshot.exists()) {

                appStore.perguntas.push(snapshot.val())
                
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

    },

    getIDUsuario() {
        const referencia = dbRef.ref('resultados/')
        if (localStorage.getItem("id") == null) {
    
          const newPostRef = referencia.push();
          const postId = newPostRef.key;
          localStorage.setItem("id", postId)
        } 
    }

};

export default firebaseServices;