import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DetailComponent } from './component/main/detail/detail.component';
import { MainComponent } from './component/main/main/main.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageUserComponent } from './page-user/page-user.component';

const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'main', component:MainComponent},
  {path:'detail', component:DetailComponent},
  {path:'admin',component:PageAdminComponent},
  {path:'user/:id',component:PageUserComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
