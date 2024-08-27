import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CriacaoComponent } from './criacao/criacao.component';

const routes: Routes = [
  {path: '', component: ListagemComponent},
  {path: 'n', component: CriacaoComponent },
  {path: 'e/:id', component: CriacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
