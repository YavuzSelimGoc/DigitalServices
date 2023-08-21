import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { PrivateLayoutComponent } from './components/private-layout/private-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "", component: PublicLayoutComponent, children: [



     
    ]
  },
  {
    path: "login", component: LoginLayoutComponent, children: [
      // { path: "", pathMatch: "full", component: LoginComponent },
      // { path: "login", component: LoginComponent },
    ]
  },
  {
    path: "admin", component: PrivateLayoutComponent, children: [


    ]
  }



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }