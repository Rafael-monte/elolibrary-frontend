import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriacaoComponent } from './criacao/criacao.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: '', component: ListagemComponent },
  { path: 'n', component: CriacaoComponent },
  { path: 'e/:id', component: CriacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
