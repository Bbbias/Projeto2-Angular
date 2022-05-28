import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RedefinirComponent } from './redefinir-senha/redefinir.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColecoesComponent } from './colecoes/colecoes.component';
import { CriarColecaoComponent } from './criar-colecao/criar-colecao.component';
import { EditasColecaoComponent } from './editas-colecao/editas-colecao.component';
import { ModelosComponent } from './modelos/modelos.component';
import { CriarModelosComponent } from './criar-modelos/criar-modelos.component';
import { EditarModelosComponent } from './editar-modelos/editar-modelos.component';
import { MenuComponent } from './menu/menu.component';

const Router: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'redefine', component: RedefinirComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'colecoes', component: ColecoesComponent},
  { path: 'criarColecao', component: CriarColecaoComponent},
  { path: 'editasColecao', component: EditasColecaoComponent},
  { path: 'modelos', component: ModelosComponent},
  { path: 'criarModelo', component: CriarModelosComponent},
  { path: 'editarModelo', component: EditarModelosComponent},
  { path: 'menu', component: MenuComponent},
  { path:'', redirectTo: '/login' , pathMatch: 'full' },
  { path:'**', component: LoginComponent},
];

@NgModule({
  exports: [RouterModule],

  imports: [
  RouterModule.forRoot(Router),
  ]

})
export class AppRoutingModule { }
