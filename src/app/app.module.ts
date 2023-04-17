import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AdminLoginComponent } from './home/admin-login/admin-login.component';
import { UserLoginComponent } from './home/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { ViewUsersComponent } from './home/view-users/view-users.component';
import { SendFilesComponent } from './home/send-files/send-files.component';
import { ViewFilesComponent } from './home/view-files/view-files.component';
import { LeakFilesComponent } from './home/leak-files/leak-files.component';
import { PasswordComponent } from './home/password/password.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './User-Dashboard/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './User-Dashboard/profile/profile.component';
import { DistributorFilesComponent } from './User-Dashboard/distributor-files/distributor-files.component';
import { ComposeComponent } from './User-Dashboard/compose/compose.component';
import { AgentFilesComponent } from './User-Dashboard/agent-files/agent-files.component';
import { UserPasswordComponent } from './User-Dashboard/user-password/user-password.component';
import { NewUserComponent } from './home/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminDashboardComponent,
    ViewUsersComponent,
    SendFilesComponent,
    ViewFilesComponent,
    LeakFilesComponent,
    PasswordComponent,
    UserDashboardComponent,
    ProfileComponent,
    DistributorFilesComponent,
    ComposeComponent,
    AgentFilesComponent,
    UserPasswordComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
