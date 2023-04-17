import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient) {}
  adminLogin(uname:any,pwd:any){
    return this.http.get('http://localhost:1234/admin/adminlogin?username='+uname+'&password='+pwd)
  }
  viewUsers(){
    return this.http.get('http://localhost:1234/admin/viewusers')
  }
  sendFiles(data:any){
    return this.http.post('http://localhost:1234/admin/sendfiles',data)
  }
  viewFiles(){
    return this.http.get('http://localhost:1234/admin/viewfiles')
  }
  deleteFile(id:any){
    return this.http.delete('http://localhost:1234/admin/'+id)
  }
  viewLeakfiles(){
    return this.http.get('http://localhost:1234/admin/viewleakfiles')
  }
  changepwd(id:any,data:any){
    return this.http.put('http://localhost:1234/admin/updatepassword/'+id,data)
  }
}
