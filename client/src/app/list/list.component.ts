import { Component, Injectable, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

@Injectable()
export class ListComponent implements OnInit {
	tasks: Task[];

  constructor(
		private tasksService: TasksService
	) { }

  ngOnInit(): void {
	  this.tasks = this.tasksService.getTasks();
  }

}
