import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  configurationUrl = "http://localhost:8000/Configuration/";
  grpUrl = 'http://localhost:8000/Grp/';
  usrUrl = 'http://localhost:8000/Usrs/';
  authUrl = 'http://localhost:8000/dj-rest-auth/login/'
  adminToken="9af792e30631062d4cc44e63bb29705ee15025b5";
  
  constructor(private http: HttpClient) { }

  authLogin(credentials:any){
    return this.http.post<any>(this.authUrl, credentials);
  }

  getConfiguration(){
    return this.http.get<any>(this.configurationUrl);
  }
  putConfiguration(data:any){
    console.log(data)
    return this.http.patch<any>(this.configurationUrl+data.id+'/',data);
  }
  getGrp(){
    return this.http.get<any>(this.grpUrl)
  }
  delGrp(grpid:any){
    return this.http.delete<any>(this.grpUrl+grpid+'/')
  }
  createGrp(data:any){
    return this.http.post<any>(this.grpUrl, data)
  }
  getUsr(){
    return this.http.get<any>(this.usrUrl)
  }
  getUsrbyId(id:any){
    return this.http.get<any>(this.usrUrl+id+'/')
  }
  getmyGrp(usr:any){
    console.log(usr)
    return this.http.get<any>('http://localhost:8000/MyGrp/?grp_id='+usr.grp_id)
  }
  updateUsr(data:any){
    return this.http.patch<any>(this.usrUrl+data.usr_id+'/', data)
  }

}
