import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoAuthGuard } from '../../app/core/auth/guards/no-auth.guard';

export const routes: Routes = [
    { 
        path: 'login',
        canActivate: [NoAuthGuard],
        component : LoginComponent,
    }];
