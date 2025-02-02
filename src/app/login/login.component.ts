import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthservicesService } from '../authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   constructor(private _AuthservicesService:AuthservicesService,private _Router:Router){}
    formgrioup:FormGroup=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      
      
      password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
      role:new FormControl('')
      
     
    });
  
  
    hellwo():void{
      
      let x = this.formgrioup.get('email')?.value;
      let y = this.formgrioup.get('password')?.value;
      let z = this.formgrioup.get('role')?.value;
      
       // دمج المتغيرين في كائن واحد
  let combinedObject = {
    email: x,
    password:y,
    role:z


  };
     
       
      console.log(combinedObject);
      this._AuthservicesService.setLogin(combinedObject).subscribe({
        next:(response)=>{
          localStorage.getItem('role')
          localStorage.setItem('eToken',response.email)
          console.log(response);
          this._Router.navigate(['/home'])
          
         
          
  
        }
      })
      
  
    }

}
