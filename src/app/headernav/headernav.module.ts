import { NgModule } from '@angular/core';
import {AuthService } from '../../login/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { HeadernavComponent } from './headernav.component';

@NgModule({
    imports: [],
    exports: [HeadernavComponent],
    declarations: [HeadernavComponent ],
    providers: [],
})
export class HeadernavModule { }
