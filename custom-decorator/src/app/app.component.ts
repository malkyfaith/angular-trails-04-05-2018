import {Component, HostListener, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { debounce } from '../decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My Custom decorator";
  @HostListener('window:scroll', ['$event'])  
  @debounce(3000) 
  scroll(event) {
    console.log(event);
  }
}
