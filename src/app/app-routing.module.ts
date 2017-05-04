import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent }   from './pages/page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: PageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
