import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from './new-task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required:true}) userId!:string
  @Output() close=new EventEmitter<void>()
  
  // enteredTitle=signal('')
  enteredTitle=('')
  enteredSummary=''
  enteredDueDate=''
  private tasksService=inject(TaskService)

  onCancelTask(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDueDate
    }, this.userId)
    this.close.emit()
  }
}
