import FirebaseApp from "../FirebaseApp";

export const userLogin = async (email, password, stayLogged) => {

    try{
        if(stayLogged){
            await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        }else{
            await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        }
        return await FirebaseApp.auth().signInWithEmailAndPassword(email.replace(/\s/g, '') , password.replace(/\s/g, ''));
    }catch (e){
        throw e;
    }
}

export const checkUser = async () => {
    try{
        let user = await FirebaseApp.auth().currentUser;
        if (user) {
            return user;
        } else {
            return null
        }
    }catch (e){
        throw e;
    }
}

export const signOutUser =  async () => {
    try{
        await FirebaseApp.auth().signOut();
    }catch (e) {
        throw e;
    }
}