import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {AuthGuard} from './helpers/authguard.service';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SavePasswordComponent} from './components/save-password/save-password.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {GeneralLibraryComponent} from './components/general-library/general-library.component';
import {EditActionComponent} from './components/edit-action/edit-action.component';
import {CreateCompoundComponent} from './components/create-compound/create-compound.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfilesComponent} from './components/profiles/profiles.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: SavePasswordComponent},
{path: 'profile', component: ProfileComponent},
  {path: 'profiles', component: ProfilesComponent},
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'library-create-compound',
    component: CreateCompoundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'general-library',
    component: GeneralLibraryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-action/:id/:description',
    component: EditActionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
