import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { RestapiService } from '../../restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  credentials:any = {
    username:'',
    password:'',
  }
  usrList:any
  constructor(private restapiService:RestapiService, private router:Router) { }

  ngOnInit(): void {
    this.restapiService.getUsr().subscribe((result:any)=>{
      this.usrList=result
      console.log(result)
    });
  }
  connect(){
    if(this.credentials.username=="admin"){
      this.router.navigate(['/admin'])
    }
    for(let usr of this.usrList){
      if(this.credentials.username==usr.nameusr){
        this.router.navigate(['/user/'+usr.usr_id])
      }
    }
    return 0
  }
  
}
