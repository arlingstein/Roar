import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register.component';
import { AuthService } from '../login/auth/auth.service';

export const routes: Routes = [
//  { path: '', redirectTo: '/register', pathMatch: 'full'},
   { path: 'register', component: RegisterComponent},
   // { path: '**', component: RegisterComponent}
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule,
        RouterModule.forChild(routes)
    ],
    exports: [RegisterComponent],
    declarations: [RegisterComponent],
    providers: [AuthService, AngularFireAuth],
})
export class RegisterModule { }
