// typescript file w/ main properties + methods + etc...
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // whatever the HTML tag is
  // in this case, it is the root, so it is in index.html
  templateUrl: './app.component.html', // HTML file we are using
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
