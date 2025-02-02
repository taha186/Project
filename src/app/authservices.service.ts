import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }



  logout():void{
    localStorage.removeItem('eToken')
    this._Router.navigate(['login'])
  }
  setregisiter(userdata:object):Observable<any>{
    return this._HttpClient.post(`https://localhost:7145/api/accounts/Registar`,userdata)
  }
  setLogin(userdata:object):Observable<any>{
    return this._HttpClient.post(`https://localhost:7145/api/accounts/Login`,userdata)
  }

  getrestaurantbyemail(userdata:any):Observable<any>{
    return this._HttpClient.get(`https://localhost:7145/api/resturants/${userdata}`)
  }createrestaurant(userdata:object):Observable<any>{
    return this._HttpClient.post(`https://localhost:7145/api/resturants/create`,userdata)
  }



  updatarestaurant(userdata:object):Observable<any>{
    return this. _HttpClient.put(`https://localhost:7145/api/resturants/update`,userdata)
  }
  DeletRestaurant(userdata:any):Observable<any>{
    return this. _HttpClient.delete(`https://localhost:7145/api/resturants/delete/${userdata}`)
  }






  addMenue(userdata:any):Observable<any>{
    return this._HttpClient.post(`https://localhost:7145/api/menue/create`,userdata)
  }



  Getmenue(userdata:any):Observable<any>{
    return this._HttpClient.get(`https://localhost:7145/api/menue/${userdata}`)
  }
}
