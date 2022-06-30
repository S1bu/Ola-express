import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';
import { SafteyTipsComponent } from './saftey-tips/saftey-tips.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'add', component:AddComponent },
  { path: 'display', component:DisplayComponent},
  { path: 'safety-tips', component:SafteyTipsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})export class AppRoutingModule { }
