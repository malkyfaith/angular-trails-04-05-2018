import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SortPipe } from 'src/app/sort.pipe';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arr: any[];

  ngOnInit() {
    //this.arr = ['asd', 45, 4, '12ads',78, 55, 13, 4, 5, 'zasd', 'cdas'];
    //this.arr = ['5', 'asd', '12ads','zasd', 'cdas', 'x', '12', '1', '0' ];
    let arr1 = ['5', 'asd', '12ads', 'zasd', 'cdas', 'x', '12', '1', '0'];
    //setInterval(() => this.arr = [...arr1], 5000);
  }

  config = {
    position: 'top'
  };

  onClick() {
    this.config = {
      position : 'bottom'
    }
  }
  
}
