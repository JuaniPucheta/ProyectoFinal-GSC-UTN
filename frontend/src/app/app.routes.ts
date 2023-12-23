import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent}
];
