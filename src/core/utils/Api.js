import { async } from '@firebase/util';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './firebaseConfig';

//Conexão com firebase;
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Para fazer a manipulação da base de dados;
const db = firebaseApp.firestore();

export default {

    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
    },

    addUser: async (u) => {
        await db.collection('users').doc(u.id).set({
            name: u.name,
            avatar: u.avatar,
        }, {merge:true});//Caso já existir ele atualiza;
    }
}