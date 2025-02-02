import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlOptions } from '@angular/forms';
import { AuthservicesService } from '../authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisiter',
  templateUrl: './regisiter.component.html',
  styleUrls: ['./regisiter.component.css']
})
export class RegisiterComponent {

  constructor(private _AuthservicesService:AuthservicesService,private _Router:Router){}
  formgrioup:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    displayName:new FormControl(''),
    phoneNumber:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('')
    
   
  });

 

  hellwo():void{

    
    
    console.log(this.formgrioup.value);
    
    
   
    this._AuthservicesService.setregisiter(this.formgrioup.value).subscribe({
      next:(response)=>{
        
        console.log(response);
        localStorage.setItem('role',response.role)
        
        this._Router.navigate(['/login'])
       

        
       
        

      },error:(err)=>{
        console.log(err);
        
        
      }
    })
 
   
     
   
    

  }
}
