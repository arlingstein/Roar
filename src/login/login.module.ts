import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import {AuthService} from './auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
   { path: 'login', component: LoginComponent},
   // { path: '**', component: RegisterComponent}
];

export const firebaseConfig = {
    apiKey: 'AIzaSyCXED1cY3hiUDPMiiy_p_amvPFmmGC2S8c',
    authDomain: 'roar-f981e.firebaseapp.com',
    databaseURL: 'https://roar-f981e.firebaseio.com',
    projectId: 'roar-f981e',
    messagingSenderId: '58769903824355'
  };


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AngularFireAuthModule,
         // AngularFireModuleDatabase,
         RouterModule.forChild(routes),
         AngularFireModule.initializeApp(firebaseConfig)
        ],
    declarations: [
        LoginComponent,
        ],
    exports: [LoginComponent],
    providers: [AuthService , AngularFireAuth ]
})
export class LoginModule {}
