import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-agent-files',
  templateUrl: './agent-files.component.html',
  styleUrls: ['./agent-files.component.css']
})
export class AgentFilesComponent implements OnInit{
  agentFiles:any
  constructor(private userservice:UserService){}
  ngOnInit(): void {
    let name =JSON.parse(localStorage.getItem('user')!)
   this.userservice.viewAgentFiles(name.username,name.username).subscribe((res:any)=>{
    this.agentFiles = res
   })
  }

}
