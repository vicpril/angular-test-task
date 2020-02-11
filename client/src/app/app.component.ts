import { Component, Injectable, OnInit } from '@angular/core';
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
	constructor(
		private tasksService: TasksService
	){}
	
	ngOnInit() {
		this.tasksService.fetchTasks();
	}
}
