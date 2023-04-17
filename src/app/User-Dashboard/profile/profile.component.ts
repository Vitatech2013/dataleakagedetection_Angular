import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
profile!:FormGroup
user:any
userId:any

  constructor( private userservice:UserService,private fb :FormBuilder){}

  ngOnInit(): void {
  let username = JSON.parse(localStorage.getItem('user')!) 
  
   
    this.profile = this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],     
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      file:['',[Validators.required]],
     })
     this.userservice.viewProfile(username.username).subscribe((res:any)=>{
      res.map((x:any)=>{
        this.user=x
      })
      this.profile.patchValue({
        firstname:this.user.firstname,
        username:this.user.username,
        lastname:this.user.lastname,
        mobileno:this.user.mobileno,
        emailid:this.user.emailid,
        file:this.user.file
      })
     })
  }
  update(){
    this.userservice.updateUser(this.user._id,this.profile.value).subscribe((res:any)=>{
   if(res){
    alert('update sucessfully')
   }else{
   alert('update fail')
   }
   window.location.reload()
    })
  }

}
