import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent {

user:any
Cpwd!:FormGroup
  constructor(private userservice:UserService,private fb:FormBuilder,private router:Router){}

  
  ngOnInit(): void {
   this.user = JSON.parse(localStorage.getItem('user')!)
   this.Cpwd =this.fb.group({
    userName:[this.user.username,[Validators.required]],
    pwd:['',[Validators.required]],
    npwd:['',[Validators.required]]
   });
  }
  
  get pwd(){
    return this.Cpwd.get('pwd')
  }
  get npwd(){
   return this.Cpwd.get('npwd')
 }
submit(){
 let data={
  password:this.Cpwd.value.npwd
 }
 if(this.Cpwd.value.pwd == this.user.password){
   this.userservice.userPasswordupdate(this.user._id,data).subscribe((res:any)=>{
    localStorage.removeItem('user')
    this.router.navigate(['/dashboard/userlogin'])
    alert('password changed suceesfully')
   })
 }else{
  alert('old password is not match')
 }
}
}
