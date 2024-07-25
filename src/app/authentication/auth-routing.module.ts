import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from "./login/login.page";
import {RegisterPage} from "./register/register.page";

const routes: Routes = [
  {
    path: 'login',
     component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}