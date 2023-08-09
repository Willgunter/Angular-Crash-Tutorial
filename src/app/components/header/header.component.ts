// declaration / class file
import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker'; // add types for some important reason
  showAddTask: boolean = false;
  // what is this
  subscription: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    
    // enables us to change the color and text of the button when we click
    // the "Add" or "Close" button
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  // this functionality is written here as opposed to
  // the button class because we want it to have custom 
  // functionality
  toggleAddTask() {
    // calls ui.service.ts
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
