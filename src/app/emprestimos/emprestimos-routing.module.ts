import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevolverComponent } from './devolver/devolver.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { ListagemComponent } from './listagem/listagem.component';
const routes: Routes = [
  { path: 'd/:id', component: DevolverComponent },
  { path: 's/:id', component: SolicitarComponent },
  { path: '', component: ListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimosRoutingModule { }
