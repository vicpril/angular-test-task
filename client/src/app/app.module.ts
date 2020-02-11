import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ListComponent } from './list/list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksService } from './tasks.service';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ListComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
