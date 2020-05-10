import { Component } from '@angular/core';

import { ZomatoService } from './services/zomato.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'zomato';
  
  public details:any[] = [];

  constructor(private zomatoservice:ZomatoService){}

  ngOnInit(){

    

  this.zomatoservice.getDatail().subscribe(
    data=>{
      this.details=data.collections;      

    },
    err=>{
      console.log(err)
    }
  )
}


saveDetail(data){
  this.zomatoservice.saveDetail(data).subscribe(
    res => {
      console.log("res")
    },
    err =>{
      console.log(err);
      
    }
  )
}
  
 
  
}
