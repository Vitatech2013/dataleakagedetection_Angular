import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AdminLoginComponent } from './home/admin-login/admin-login.component';
import { UserLoginComponent } from './home/user-login/user-login.component';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { ViewUsersComponent } from './home/view-users/view-users.component';
import { SendFilesComponent } from './home/send-files/send-files.component';
import { ViewFilesComponent } from './home/view-files/view-files.component';
import { LeakFilesComponent } from './home/leak-files/leak-files.component';
import { PasswordComponent } from './home/password/password.component';
import { UserDashboardComponent } from './User-Dashboard/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './User-Dashboard/profile/profile.component';
import { DistributorFilesComponent } from './User-Dashboard/distributor-files/distributor-files.component';
import { ComposeComponent } from './User-Dashboard/compose/compose.component';
import { AgentFilesComponent } from './User-Dashboard/agent-files/agent-files.component';
import { UserPasswordComponent } from './User-Dashboard/user-password/user-password.component';
import { NewUserComponent } from './home/new-user/new-user.component';

const routes: Routes = [
  { path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path:'dashboard',component:DashboardComponent,children:[
    { path:'adminlogin',component:AdminLoginComponent},
    { path:'userlogin',component:UserLoginComponent},
    { path:'newuser',component:NewUserComponent}
  ]},
  { path:'admindashboard',component:AdminDashboardComponent,children:[
    {path:'viewusers',component:ViewUsersComponent},
    {path:'sendfiles',component:SendFilesComponent},
    {path:'viewfiles',component:ViewFilesComponent},
    {path:'leakfiles',component:LeakFilesComponent},
    {path:'password',component:PasswordComponent}
  ]},
  {path:'userdashboard',component:UserDashboardComponent,children:[
    {path:'profile',component:ProfileComponent},
    {path:'distributorfiles',component:DistributorFilesComponent},
    {path:'compose',component:ComposeComponent},
    {path:'agentfiles',component:AgentFilesComponent},
    {path:'userpassword',component:UserPasswordComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
