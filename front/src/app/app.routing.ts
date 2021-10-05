import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { PaisIndexComponent } from './components/paises/pais-index/pais-index.component';
import { PaisCreateComponent } from './components/paises/pais-create/pais-create.component';



const appRoute : Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard',component: DashboardComponent},
    {path: 'usuarios',component: UserIndexComponent},
    {path: 'usuarios/registrar', component: UserCreateComponent},
    {path: 'usuario/editar/:id', component: UserEditComponent},
    {path: 'paises',component: PaisIndexComponent},
    {path: 'paises/registrar',component: PaisCreateComponent},
]


export const appRoutingProviders : any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoute);