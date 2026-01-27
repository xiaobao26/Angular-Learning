import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../core/mock-data/dummy-tasks';
import { NewTask } from './task/task.modal';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true}) userid!: string;
  @Input({ required: true}) name!: string
  tasks = DUMMY_TASKS;
  isAddingTask = false;

  private tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userid);
  }

  handleTaskCompleted(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(data: NewTask) {
    this.isAddingTask = false;
  }
}
