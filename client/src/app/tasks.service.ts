import { Task } from './task';

export class TasksService {
	private tasks: Task[];
	
	getTasks() {
		return this.tasks.slice();
	}
	
	fetchTasks() {
		const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
		this.tasks = tasks.map(t => {
			if(t.status != 'Completed' && +new Date(t.date) <= +new Date()) {
			   t.status = 'Outdated'
			}
			return t;
		} )
	}
	
	saveTasks() {
		localStorage.setItem('tasks', JSON.stringify(this.getTasks()));
	}
	
	getTask(id: number){
		return this.getTasks().find(t => t.id === id);
	}
	
	createTask(task: Task) {
		if(!task.id) {
			task.id = +new Date();
		}
        task.status = (+task.date > +new Date()) ? 'In progress' : 'Outdated';
		this.tasks.push(task);
		this.saveTasks();
	}
	
	updateTask(id: number, data) {
		const idx = this.getTasks().findIndex(t => t.id === id);
		const tasks = this.getTasks();
		const status = (+data.date > +new Date()) ? 'In progress' : 'Outdated';
		this.tasks[idx] = {...tasks[idx], title: data.title, description: data.description, date: data.date, status: status };
		this.saveTasks();
	}
	
	completeTask(id: number) {
		const idx = this.getTasks().findIndex(t => t.id === id);
		this.tasks[idx].status = 'Completed';
		this.saveTasks();
	}
	
}