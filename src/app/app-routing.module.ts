import { CreateRestaurantsComponent } from './create-restaurants/create-restaurants.component';
import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { HomeComponent } from './home/home.component';


import { EmpyleeComponent } from './empylee/empylee.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisiterComponent } from './regisiter/regisiter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { UpdataComponent } from './updata/updata.component';
import { MenueComponent } from './menue/menue.component';
import { CreateMenueComponent } from './create-menue/create-menue.component';
import { NavbarmeneComponent } from './navbarmene/navbarmene.component';
import { DashboardComponent } from './dashboard/dashboard.component';





const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'',canActivate:[authGuard],component:BlankLayoutComponent,children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    
    {path:'home',component:HomeComponent},
    {path:'creatmenue',component:CreateMenueComponent},
    
   
   {path:'navbarMenue',component:NavbarmeneComponent},
   
    {path:'updata/:id',component:UpdataComponent},
    
    {path:'create',component:CreateRestaurantsComponent},
    {path:'',canActivate:[authGuard],component:DashboardComponent,children:[
     
      {path:'Menu/:id',component:MenueComponent},
      {path:'emplyee/:id',component:EmpyleeComponent},
      {path:'creatmenue/:id',component:CreateMenueComponent},
      
    ]}
    
 

  ]},{path:'',component:AuthLayoutComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisiterComponent}]},
    {path:'**',component:NotfoundComponent}
    
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
