import { Component, Injectable, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

declare const M;


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

@Injectable()
export class TaskComponent implements OnInit, AfterViewInit, OnDestroy {
	
  @ViewChild('chips') chipspicker: ElementRef;
  @ViewChild('datepicker') datepicker: ElementRef;
  task: Task;
  chipsObject: any;
  dateObject: any;


  constructor(
	 private tasksService: TasksService,
	 private router: Router,
	 private route: ActivatedRoute
	) {  }

  ngOnInit(): void {
	this.task = new Task()
  }
  ngAfterViewInit() {
	  this.chipsObject = M.Chips.init(this.chipspicker.nativeElement);
	  this.dateObject = M.Datepicker.init(this.datepicker.nativeElement, {
		  format: 'dd.mm.yyyy'
	  });

  }
	
	ngOnDestroy() {
		this.chipsObject.destroy();
		this.dateObject.destroy();
	}
	
	onPublish() {
		if (! this.task.title) {
			alert('Title is required');
			return;
		} else {
			const task = this.task
			this.tasksService.createTask({...task, chips: this.chipsObject.chipsData, date: this.dateObject.date} );
			this.router.navigate(['/tasks'], {relativeTo: this.route});
		}
	}

}
