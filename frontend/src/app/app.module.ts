import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UsuarioServiceService } from './services/usuario-service.service';
import {HttpClientModule} from '@angular/common/http';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { PrincipalComponent } from './views/principal/principal.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdministrativoComponent } from './views/administrativo/administrativo.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { TesteDialogComponent } from './testes/teste-dialog/teste-dialog.component';
import { DialogExampleComponent } from './testes/dialog-example/dialog-example.component';
import { AtualizarComponent } from './views/atualizar/atualizar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    PrincipalComponent,
    AdministrativoComponent,
    TesteDialogComponent,
    DialogExampleComponent,
    AtualizarComponent,

  ],
  entryComponents: [
    DialogExampleComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [UsuarioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
