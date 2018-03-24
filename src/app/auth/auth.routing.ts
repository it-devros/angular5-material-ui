import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ResetComponent } from './reset/reset.component';
import { PasswordComponent } from './password/password.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [ {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'confirm',
        component: ConfirmComponent
    }, {
        path: 'reset',
        component: ResetComponent
    }, {
        path: 'password',
        component: PasswordComponent
    }]
  }
];
