import { dbRef, respostaRef, database } from "../key/configKey"
import { child, get, push, ref } from "firebase/database";
import { appStore } from '../main.js';
import services from "./services";

const firebaseServices = {

    getPerguntas() {
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

    salvaRespostaNoBanco(resultado) {
        if (localStorage.getItem("id") == null) {
            push(respostaRef, {
                'resposta': resultado,
                'data': services.getData()
            }).then((resposta) => {
                console.log(resposta.key);
                localStorage.setItem("id", resposta.key)
            }).catch((error) => {
                console.error(error);
            });
        } else {
            const idUsuario = localStorage.getItem("id");
            console.log(idUsuario);
            const userRef = respostaRef.child(idUsuario);
            userRef.set({
                'resposta': resultado,
                'data': services.getData()
            })
        }


        /* console.log(newPostRef);
        const postId = newPostRef.key;
        localStorage.setItem("id", postId) */

    }

};

export default firebaseServices;