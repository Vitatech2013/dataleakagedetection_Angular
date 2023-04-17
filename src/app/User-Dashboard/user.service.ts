import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  userLogin(uname:any,password:any){
    return this.http.get('http://localhost:1234/user/userlogin?username='+uname+'&password='+password)
  }
  newUsers(data:any){
    return this.http.post('http://localhost:1234/user/registration',data)
  }
  viewProfile(username:any){
    return this.http.get('http://localhost:1234/user/viewprofile?username='+username)
  }
  updateUser(id:any,data:any){
    return this.http.put('http://localhost:1234/user/updateprofile/'+id,data)
  }
  getUsers(){
    return this.http.get('http://localhost:1234/user/getusers')
  }
  sendFiles(data:any){
    return this.http.post('http://localhost:1234/user/sendagentfiles',data)
  }
  viewAgentFiles(uname:any,user:any){
    return this.http.get('http://localhost:1234/user/viewagentfiles?username='+uname+'&from='+user)
  }
  userPasswordupdate(id:any,data:any){
    return this.http.put('http://localhost:1234/user/updatepassword/'+id,data)
  }
}
