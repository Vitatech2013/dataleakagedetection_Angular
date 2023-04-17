import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User-Dashboard/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{
newUser !:FormGroup
imgUrl:any
  constructor( private fb:FormBuilder,private userservice:UserService,private router:Router){}
  ngOnInit(): void {
   this.newUser = this.fb.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    username:['',[Validators.required]],
    password:['',[Validators.required]],
    mobileno:['',[Validators.required]],
    emailid:['',[Validators.required]],
    file:['',[Validators.required]],
   })
  }
  selectionImage(event:any){
if(event.target.files && event.target.files[0]){
var reader=new FileReader()
reader.readAsDataURL(event.target.files[0])
reader.onload=(event)=>{
  this.imgUrl=event.target?.result
}
}
  }
 submit(){
  let data={
    ...this.newUser.value,
    file:this.imgUrl
  }
  this.userservice.newUsers(data).subscribe((res:any)=>{
  
    alert('User Registered sucessfully')
    this.router.navigate(['/dashboard/userlogin'])
  })
 }
}
