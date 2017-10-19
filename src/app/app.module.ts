import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// User Defined Modules
import {LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { TodoModule } from './to-do/todo/todo.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { TodoComponent } from './to-do/todo/todo.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule,
    RouterModule.forRoot(ROUTES),
    // RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
