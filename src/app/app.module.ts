import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms'; 

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RedefinirComponent } from './redefinir-senha/redefinir.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColecoesComponent } from './colecoes/colecoes.component';
import { HttpClientModule } from '@angular/common/http';
import { CriarColecaoComponent } from './criar-colecao/criar-colecao.component';
import { ColecoesService } from './colecoes.service';
import { EditasColecaoComponent } from './editas-colecao/editas-colecao.component';
import { MenuComponent } from './menu/menu.component';
import { ModelosComponent } from './modelos/modelos.component';
import { CriarModelosComponent } from './criar-modelos/criar-modelos.component';
import { EditarModelosComponent } from './editar-modelos/editar-modelos.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RedefinirComponent,
    DashboardComponent,
    ColecoesComponent,
    CriarColecaoComponent,
    EditasColecaoComponent,
    MenuComponent,
    ModelosComponent,
    CriarModelosComponent,
    EditarModelosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ColecoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
