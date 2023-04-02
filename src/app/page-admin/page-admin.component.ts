import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { NgModel } from '@angular/forms';
import { delay } from 'rxjs';
@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
  configuration:any;
  listecombinaisons:Array<any> = [];
  minmax:any;
  minmaxOptions=["Last_Min","Last_Max"]
  nbUsrInput:any;
  combinSelected:any;
  grpList:any
  constructor(private restapiService:RestapiService) { }

  ngOnInit(): void {
    this.getConfiguration()
  }

  getConfiguration(){
    this.restapiService.getConfiguration().subscribe((result:any)=>{
      this.configuration=result[0];
      this.minmax=result[0].minmax;
      this.nbUsrInput=result[0].nbusr;
      if(this.nbUsrInput!=null){
        this.getNbGroupes(this.nbUsrInput)
      }
      this.combinSelected=result[0].nbgrp;
      console.log(result[0]);
      
    });
  }
  updateConfiguration(){
    this.configuration.nbusr = this.nbUsrInput;
    this.configuration.minmax = this.minmax;
    this.configuration.nbgrp = this.combinSelected
    this.restapiService.putConfiguration(this.configuration).subscribe((result:any)=>{
      console.log(result);
    });
  }

  getNbGroupes(nbUsr:any){
    this.listecombinaisons=[]
    delay(200);
    for(let i=2; i<nbUsr/2;i++){
      if(nbUsr/i>1){
        this.listecombinaisons.push(i)
      }
    }
    console.log(this.listecombinaisons)
  }
}
