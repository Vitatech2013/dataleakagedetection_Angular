import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit{
admin:any
Cpwd!:FormGroup
  constructor(private adminservice:AdminService,private fb:FormBuilder,private router:Router){}

  
  ngOnInit(): void {
   this.admin = JSON.parse(localStorage.getItem('admin')!)
   this.Cpwd =this.fb.group({
    userName:[this.admin.username,[Validators.required]],
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
 if(this.Cpwd.value.pwd == this.admin.password){
   this.adminservice.changepwd(this.admin._id,data).subscribe((res:any)=>{
    localStorage.removeItem('admin')
    this.router.navigate(['/dashboard/adminlogin'])
    alert('password changed suceesfully')
   })
 }else{
  alert('old password is not match')
 }
}
}
