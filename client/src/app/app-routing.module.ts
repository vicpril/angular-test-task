import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from "./task/task.component";
import { ListComponent } from "./list/list.component";



const routes: Routes = [
	{path: '', component: TaskComponent},
	{path: 'tasks', component: ListComponent, children: [
		{path: ':id', component: TaskComponent},
	]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
