import * as admin from 'firebase-admin';
import {Email, EnvatoApi, UserName, Account} from './envatoApi';

const serviceAccount = require('./yppy-firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yppy-1356c.firebaseio.com"
});

export class FirebaseApi {
  
  static async authUser(accessToken: string): Promise<string> {
    const user = await EnvatoApi.getFullUserData(accessToken);
    console.log(user);

    const firebaseUser: admin.auth.UserRecord = await FirebaseApi.getUser(user.email);
    console.log(firebaseUser);

    await admin.auth().updateUser(firebaseUser.uid, {displayName: user.username, photoURL: user.account.image});
    await admin.firestore().collection('users').doc(firebaseUser.uid).set(user);
    
    return await admin.auth().createCustomToken(firebaseUser.uid);
  }
  
  static async getUser(email: string): Promise<admin.auth.UserRecord> {
    try {
      return await admin.auth().getUserByEmail(email);
    } catch (err) {
      console.log(err);
      if (err.code === 'auth/user-not-found') {
        return await FirebaseApi.createNewUser(email);
      }
    }
  }
  
  static async createNewUser(email: string): Promise<admin.auth.UserRecord> {
    const firebaseUser: admin.auth.UserRecord = await admin.auth().createUser({
      email: email,
      emailVerified: true,
      disabled: false,
    });
    
    return firebaseUser;
  }
}