import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './Components/edit/edit.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"edit/:post.id", component:EditComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
