import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ApiComponent } from './api/api.component';



const routes: Routes = [
  { path: "", component: CatalogoComponent },
  { path: "catalogo", component: ApiComponent },
  { path: "**", redirectTo: "" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
