import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/home/admin.service';

@Component({
  selector: 'app-distributor-files',
  templateUrl: './distributor-files.component.html',
  styleUrls: ['./distributor-files.component.css']
})
export class DistributorFilesComponent implements OnInit{
  adminFiles!:any
  constructor(private adminservice:AdminService){}
  ngOnInit(): void {
   this.adminservice.viewFiles().subscribe((res:any)=>{
    this.adminFiles = res
   })
  }

}
