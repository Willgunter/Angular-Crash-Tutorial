import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {//implements OnInit {

  // problem 1 - if we don't delete "| undefined"
  // it is an error in task-item.component.html

  // problem 2 - if we delete "| undefined"
  // it is an error in task-item.component.ts

  // what is the fucking problem then???
  @Input() task: Task;
  
  // used to delete a task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()

  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  // variable that represents faTimes font
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {}

  // deletes a task
  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  // since we are emitting it, we have to go to the "tasks" class and do something (already did it)
  // also, we have to create a function in tasks.componenet.ts
  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }

}
