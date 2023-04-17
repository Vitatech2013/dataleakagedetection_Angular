import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-send-files',
  templateUrl: './send-files.component.html',
  styleUrls: ['./send-files.component.css']
})
export class SendFilesComponent implements OnInit{
viewusers :any
  constructor(private adminservice:AdminService,private fb:FormBuilder){}

  sendFile = this.fb.group({
    username: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    file: ['', [Validators.required]],

  });
  ngOnInit(): void {
   
    this.adminservice.viewUsers().subscribe((res:any)=>{
      this.viewusers =res
     })
  }
  submit(){
    let data={
      ...this.sendFile.value,
      key:Math.floor((Math.random() * 1000000) + 1),
      date:new Date()
    }
   this.adminservice.sendFiles(data).subscribe((res:any)=>{
    alert('Send file sucessfully')
   })
   
  }
  
}
