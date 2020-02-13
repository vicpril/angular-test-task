import { Component, Injectable, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Task } from '../task';
import { TasksService } from '../tasks.service'

declare const M;

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

@Injectable()
export class EditTaskComponent implements OnInit, AfterViewInit, OnDestroy {
	
  @ViewChild('chips') chipspicker: ElementRef;
  @ViewChild('datepicker') datepicker: ElementRef;
  chipsObject: any;
  dateObject: any;
	  task: Task;


  constructor(private tasksService: TasksService,
			  private route: ActivatedRoute,
			  private router: Router) { }

  ngOnInit(): void {
	  
	  this.task = this.tasksService.getTask(+this.route.snapshot.params['id'])
  }
	
  ngAfterViewInit() {
	  this.chipsObject = M.Chips.init(
		  this.chipspicker.nativeElement,
		  {
			  data: this.task.chips
		  }
	  );
	  this.dateObject = M.Datepicker.init(this.datepicker.nativeElement, {
		  format: 'dd.mm.yyyy',
	  });
	  this.dateObject.setDate(new Date(this.task.date));

  }
	
	ngOnDestroy() {
		this.chipsObject.destroy();
		this.dateObject.destroy();
	}
	
	onUpdate() {
		const task = this.task
		this.tasksService.updateTask(+this.task.id, {...task, chips: this.chipsObject.chipsData, date: this.dateObject.date} );
		this.router.navigate(['/tasks'], {relativeTo: this.route});
	}
	
	  onComplete() {
		  this.tasksService.completeTask(+this.task.id);
		  this.router.navigate(['/tasks'], {relativeTo: this.route});
	  }


}
