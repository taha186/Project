import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarmene',
  templateUrl: './navbarmene.component.html',
  styleUrls: ['./navbarmene.component.css']
})
export class NavbarmeneComponent implements OnInit {
  idrestaurant:any;
  ngOnInit(): void {
   this.idrestaurant= localStorage.getItem('IdRestaurant')
    
  }
  

}
