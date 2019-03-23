import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/Home.component';
import { AddGroupComponent } from './components/addGroup/addGroup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addGroup',component:AddGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
