import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  // defines a tasks object that has a TaskService 
  // property (another 216 concept)

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {

    // async function (uses observables)
    // that makes this.tasks = tasks
    // we can do this because in the constructor
    // we gave access to a taskService object
    // as a property of a tasks object (just read 
    // the constructor comments)

    // you also have to subscribe to the getTasks()

    this.taskService.getTasks().subscribe((tasks) => (this.
      tasks = tasks));


  }

  deleteTask(task: Task) {
    // in here, you call the service method (for some reason you have to put something in task.service.ts (???))
    // 2nd half of the line uses programming logic to delete the one task
    // .subscribe is basically a .then (what is a .then)
    // 
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id
          !== task.id))
        );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService
      .updateTaskReminder(task)
      .subscribe();
  }

  // addTask(task: Task) calls addTask(task) in task.service.ts and pushes 
  // tasks into the db file
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.
      tasks.push(task)));
  }
}
