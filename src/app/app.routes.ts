import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
    { path: 'livros', loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule) },
    { path: 'emprestimos', loadChildren: () => import('./emprestimos/emprestimos.module').then(m => m.EmprestimosModule) },
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];