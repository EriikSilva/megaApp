import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogExampleComponent } from './testes/dialog-example/dialog-example.component';
import { TesteDialogComponent } from './testes/teste-dialog/teste-dialog.component';
import { AdministrativoComponent } from './views/administrativo/administrativo.component';
import { AtualizarComponent } from './views/atualizar/atualizar.component';
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
  },
  {
    path:'admin',
    component:AdministrativoComponent
  },
  {
    path:'atualizar/:id',
    component:AtualizarComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
