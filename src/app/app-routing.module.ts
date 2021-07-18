import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeaturesComponent} from './features/features.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CurrenciesComponent} from './currencies/currencies.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginGuardGuard} from './login-guard.guard';

const routes: Routes = [
  {path: 'features', component: FeaturesComponent, canActivate: [LoginGuardGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: '/features', pathMatch: 'full', canActivate: [LoginGuardGuard]},
  {path: 'currencies', component: CurrenciesComponent, canActivate: [LoginGuardGuard]},
  { path: '**', component: PageNotFoundComponent, canActivate: [LoginGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
