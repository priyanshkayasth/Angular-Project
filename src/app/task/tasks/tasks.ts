import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../shared/card/card';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Card],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) task!: Task
  @Output() complete=new EventEmitter<string>()

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }

}
