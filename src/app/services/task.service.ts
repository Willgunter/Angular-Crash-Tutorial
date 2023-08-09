// a service (this is a service) is a class
// that services a specific, well-defined purpose
// ideally in ux
// 
// this service depends on task, TASKS, and observable

import { Injectable } from '@angular/core';

// Angular HTTP client (imported from angular's own framework I think)
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // api url that Angular uses to 
  // GET, POST, DELETE,... (CRUD commands)
  // why doesn't THIS work???
  private apiUrl = 'http://localhost:5000/tasks';

  // (does this work as intended?)
  constructor(private http:HttpClient) { }

  // method that takes an observable object
  // (I think) and returns tasks
  getTasks(): Observable<Task[]> {

    // uses GET request to acquire 
    // and return an array of tasks
    // is now coming from a "mock backend"
    // rather than imported from a file

    return this.http.get<Task[]>(this.apiUrl);

    // was:
    // const tasks = of(TASKS);
    // return tasks;

    /** also works (non-async, non-observable version):
    *
    * getTasks(): task[] {
    *  return TASKS;
    * } 
    * 
    */
     
  }

  // Observable that takes in a task and deletes it from the url
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)

  }


}