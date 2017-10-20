import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) {

  }

  createUserWithEmailAndPassword(username: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(username, password);
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithUsernameAndPassword(username: string, password: string) {
    // this.firebaseAuth.auth.signInWithCredential({});
  }

  loginWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.firebaseAuth.auth.signOut();
  }
}
