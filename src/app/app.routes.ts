import { Component } from '@angular/core';
import { Authentication } from './pages/authentication/authentication';
import { Routes } from '@angular/router';
import { UC00604ProgramaWeb } from './pages/uc00604-programa-web/uc00604-programa-web';

export const routes: Routes = [
  /** nossa 1ª rota */
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: "welcome", loadComponent: () => import('./pages/welcome/welcome').then((moura) => moura.Welcome)},
  /* rota padrão sem layseout */
  {path: 'pages/uc00604', component: UC00604ProgramaWeb},
  {path: 'pages/autenticacao', loadComponent: () => import('./pages/authentication/authentication').then(ze => ze.Authentication)},

  /** nossa ultima rota */
  {path: '**', loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
];
