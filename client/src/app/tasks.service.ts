import { Task } from './task';

export class TasksService {
	private tasks: Task[];
	
	getTasks() {
		return this.tasks.slice();
	}
	
	fetchTasks() {
		this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
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
		this.tasks.push(task);
		this.saveTasks();
	}
	
	updateTask(id: number, data) {
		const idx = this.getTasks().findIndex(t => t.id === id);
		const tasks = this.getTasks();
		this.tasks[idx] = {...tasks[idx], title: data.title, description: data.description, date: data.date };
		this.saveTasks();
	}
	
	deleteTask(id: number) {
		this.tasks = this.getTasks().filter(t => t.id !== id);
		this.saveTasks();
	}
	
}