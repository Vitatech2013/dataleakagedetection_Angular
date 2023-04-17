import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  viewusers:any
  constructor(private adminservice:AdminService){}
  ngOnInit(): void {
   this.adminservice.viewUsers().subscribe((res:any)=>{
    this.viewusers =res
   })
  }

}
