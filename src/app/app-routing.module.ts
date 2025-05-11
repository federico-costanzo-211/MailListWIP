import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'edit', component: EditPageComponent },
  { path: 'add', component: AddPageComponent} //queryParams
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
