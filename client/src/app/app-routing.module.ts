import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from "./task/task.component";
import { ListComponent } from "./list/list.component";
import { EditTaskComponent } from "./edit-task/edit-task.component";

const routes: Routes = [
	{path: '', component: TaskComponent},
	{path: 'tasks', component: ListComponent},
	{path: 'tasks/:id/edit', component: EditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
