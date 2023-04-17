import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-leak-files',
  templateUrl: './leak-files.component.html',
  styleUrls: ['./leak-files.component.css']
})
export class LeakFilesComponent implements OnInit{
  leakfiles!:any
  constructor( private adminservice:AdminService){}
  ngOnInit(): void {
   this.adminservice.viewLeakfiles().subscribe((res:any)=>{
    this.leakfiles = res
   })
  }

}
