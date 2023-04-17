import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent {

  Compose!:FormGroup
  viewusers:any
  public username:any
  constructor( private userservice:UserService,private fb :FormBuilder){}

  ngOnInit(): void {
this.username=JSON.parse(localStorage.getItem('user')!).username
   
    this.Compose = this.fb.group({
     from:[JSON.parse(localStorage.getItem('user')!).username],
      username:['',[Validators.required]],
      subject:['',[Validators.required]],     
      file:['',[Validators.required]],
      key:[Math.floor((Math.random() * 1000000) + 1)],
      date:[(new Date())],
     
     })
   
     this.userservice.getUsers().subscribe((res:any)=>{
      this.viewusers = res      
     })
    
  }
  sendFiles(){
    const data ={
      username:this.Compose.get('username')?.value,
      subject:this.Compose.get('subject')?.value,
      file:this.Compose.get('file')?.value,
      key:this.Compose.get('key')?.value,
      date:this.Compose.get('date')?.value,
      from:this.Compose.get('from')?.value
      
    }
    console.log(data);
    
 this.userservice.sendFiles(data).subscribe((res:any)=>{
  console.log(res,'v');
  
 })
 alert('Send File sucessfully')
  }
}
