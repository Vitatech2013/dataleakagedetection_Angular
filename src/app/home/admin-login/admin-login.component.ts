import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb : FormBuilder,private router:Router,private adminservice:AdminService){}

adminlogin =this.fb.group({
  userName:['',[Validators.required,]],
  password:['',[Validators.required,]],
 
 });

 ngOnInit():void{}
 get userName(){
   return this.adminlogin.get('userName')
 }
 get password(){
   return this.adminlogin.get('password')
 }

 submit(){
  this.adminservice.adminLogin(this.adminlogin.value.userName, this.adminlogin.value.password).subscribe((res:any)=>{
    console.log(res);
    
    if(res){
      alert('login success')
      localStorage.setItem('admin', JSON.stringify(res))
  this.router.navigate(['/admindashboard'])
    }else{
      alert('login failed')
    }
  })
  
 }
}

