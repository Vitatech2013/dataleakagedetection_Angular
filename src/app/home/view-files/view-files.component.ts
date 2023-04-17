import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.css']
})
export class ViewFilesComponent implements OnInit{
  viewfiles:any
  constructor( private adminservice :AdminService){}
  ngOnInit(): void {
    this.adminservice.viewFiles().subscribe((res:any)=>{
      this.viewfiles =res
    })
  }
  delete(id:any){
  this.adminservice.deleteFile(id).subscribe((res:any)=>{
    window.location.reload()
  })
  }

}
