import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ContactComponent } from './contact/contact.component';
import { SafteyTipsComponent } from './saftey-tips/saftey-tips.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddComponent,
    DisplayComponent,
    EditItemComponent,
    DetailsPageComponent,
    ContactComponent,
    SafteyTipsComponent,
    ComplaintsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]})export class AppModule { }
