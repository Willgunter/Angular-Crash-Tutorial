// ui service that toggles Add task form
//
// contains a property called "showAddTask" that is a boolean
//
// uses a Subject (type of Observable) that takes information from
// one Observable and passes it onto multiple other Observables

import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  
  // in documentation apparently
  private subject = new Subject<any>();

  constructor() { }

  // call this method when you click the "Add" button
  toggleAddTask(): void {
    console.log(123);
    
    this.showAddTask = !this.showAddTask;

    // next is a method in Subject data types 
    // that passes the Observable (this.showAddTask)
    // to all Observables that are subscribed to the subject
    this.subject.next(this.showAddTask) 
  }

  // call this method when you "want to do something when that happens"
  // (??? what does that mean???)
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
