import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent }   from './table.component';
import { TeamComponent }      from './team.component';
const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table',  component: TableComponent },
  { path: 'team/:id', component: TeamComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}