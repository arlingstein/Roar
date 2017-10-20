// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomepageComponent } from './homepage.component';
// import { HttpModule } from '@angular/http';
// import { CommonModule } from '@angular/common';
// import {
//     MatAccordion,
//     MatMenuModule,
//     MatCalendar,
//     MatCalendarBody,
//     MatCalendarCell,
//     MatDatepickerModule
// } from '@angular/material';

// export const homepageRoutes: Routes = [
//     { path: 'home', component: HomepageComponent }
// ];

// @NgModule({
//     imports: [
//         RouterModule.forChild(homepageRoutes),
//         CommonModule,
//         MatAccordion,
//         MatMenuModule,
//         MatCalendar,
//         MatCalendarBody,
//         MatCalendarCell,
//         MatDatepickerModule,
//         HttpModule,
//     ],
//     exports: [HomepageComponent],
//     declarations: [HomepageComponent],
//     providers: [],
// })
// export class HomepageModule { }


























import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent },
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [HomepageComponent],
    declarations: [HomepageComponent],
    providers: [AngularFireAuth],
})
export class HomepageModule { }
