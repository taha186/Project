import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../authservices.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private _AuthservicesService:AuthservicesService,private _Router:Router,private _ToastrService:ToastrService){}
  details:any=[];


  logout():void{
    this._AuthservicesService.logout();
  }
  ngOnInit(): void {
    var email=localStorage.getItem('eToken');
    this._AuthservicesService.getrestaurantbyemail(email).subscribe({
      next:(response)=>{

        console.log('hi',response);
        this.details=response;
        

      }
    })


    



  }


  deletrestaurant(Id:any){
   
  
 this._AuthservicesService.DeletRestaurant(Id).subscribe({
  next:(response)=>{

    
   console.log(response);
   window.location.reload();
   this._ToastrService.success('Deleted succefully')
   
   
    

  }
 })
 




  }

}
