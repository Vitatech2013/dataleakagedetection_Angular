import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User-Dashboard/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private fb : FormBuilder,private router:Router,private userservice:UserService){}

  userLogin =this.fb.group({
    userName:['',[Validators.required,]],
    password:['',[Validators.required,]],
   
   });
  
   ngOnInit():void{}
   get userName(){
     return this.userLogin.get('userName')
   }
   get password(){
     return this.userLogin.get('password')
   }
  
   submit(){
    this.userservice.userLogin(this.userLogin.value.userName, this.userLogin.value.password).subscribe((res:any)=>{
      if(res){
        alert('login success')
        localStorage.setItem('user', JSON.stringify(res))
    this.router.navigate(['/userdashboard'])
      }else{
        alert('login failed')
      }
    })
    
   }
  }

