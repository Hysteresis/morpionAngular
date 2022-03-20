import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from './board/board.component';
import {RulesComponent} from './rules/rules.component';

const routes: Routes = [
  {path: 'home', component: BoardComponent},
  {path: 'rules', component:RulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
