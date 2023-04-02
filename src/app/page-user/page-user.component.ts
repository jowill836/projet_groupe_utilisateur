import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  grpList:any
  nbMax=0
  dernierGrpId=0
  dernierGrpMax=0
  configuration:any
  usr!:any
  teammates=null
  newGrp:any
  constructor(private restapiService:RestapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getConfiguration()
    this.getGrpList()
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.getUsrById(id)
    });
  }
  placementauto(){
    console.log("yes")
    if(this.usr.grp_id == null){
      for(let grp of this.grpList){
        console.log(grp)
        console.log(this.nbMax)
        if(grp.nbUser < this.nbMax){
          console.log("youhou")
          this.getInGrp(grp.grp_id)
          break
        }
      }
    }
    
  }
  newgrp(){
    if(this.usr.grp_id==null){
      let islast = null
      if(this.grpList.length+1==this.configuration.nbgrp){
        islast=1
      }
      if(this.grpList.length<this.configuration.nbgrp){
        this.newGrp = {
          namegrp:this.usr.nameusr+'groupe',
          islast:islast
        }
      }
      this.restapiService.createGrp(this.newGrp).subscribe((result:any)=>
      {
        console.log(result)
        this.getInGrp(result.grp_id)
        this.getGrpList()
      })
    }
  }
  getInGrp(grpid:any){
    this.usr.grp_id = grpid
    console.log(this.usr)
    this.restapiService.updateUsr(this.usr).subscribe((result:any)=>{

      this.myGrp()
      this.getGrpList()
    })
  }
  getOutGrp(){
    this.usr.grp_id = null
    this.restapiService.updateUsr(this.usr).subscribe((result:any)=>{
    
      this.teammates=null
      this.getGrpList()
    })
  }
  getUsrById(id:any){
    this.restapiService.getUsrbyId(id).subscribe((result:any)=>{
      this.usr = result
      if(this.usr.grp_id!=null){
        this.myGrp()
      }
    })
  }
  getGrpList(){
    this.restapiService.getGrp().subscribe((result:any)=>{
      this.grpList=result
      this.derniergrp()
      console.log(result)
    });
  }
  
  getConfiguration(){
    this.restapiService.getConfiguration().subscribe((result:any)=>{
      this.configuration=result[0]
    });
  }
  derniergrp(){ 
    this.nbMax=this.configuration.nbusr/this.configuration.nbgrp
    if(this.nbMax%1!=0){
      let decimal=this.nbMax%1
      this.nbMax=~~this.nbMax+(1-this.configuration.minmax)
      if(this.configuration.minmax==0){
        this.dernierGrpMax=this.nbMax-Math.round(decimal*this.configuration.nbgrp)
      }else{
        this.dernierGrpMax=Math.round(decimal*this.configuration.nbgrp)+this.nbMax
      }
    }else{
      this.dernierGrpMax=this.nbMax
    }
  }
  myGrp(){
    console.log(this.usr)
    this.restapiService.getmyGrp(this.usr).subscribe((result:any)=>{
      this.teammates=result
    });
  }
  getmygrp(){
    for( let grp of this.grpList){
      if(grp.grp_id == this.usr.grp_id){
        return grp.namegrp
      }
    }
    return ""
  }
  delGrp(grpid:any){
    this.restapiService.delGrp(grpid).subscribe((result:any)=>{
      console.log(result)
      this.getGrpList()
    })
  }

}
