import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { PrincipalComponent } from './views/principal/principal.component';

const routes: Routes = [
  {
  path:'',
  component: HomeComponent
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'principal',
    component:PrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
