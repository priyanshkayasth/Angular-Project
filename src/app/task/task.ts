import { Component, Input } from '@angular/core';
import { Tasks } from './tasks/tasks';
import { NewTask } from './new-task/new-task';
import { TaskData } from './new-task/new-task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [Tasks, NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  isAddingTask = false
  private tasksService: TaskService;
  // @Input() name:string|undefined

  constructor(tasksService: TaskService) {
    this.tasksService = tasksService
  }

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id)
  }

  onAddTask() {
    this.isAddingTask = true
  }
  onCloseTask() {
    this.isAddingTask = false
  }

}
