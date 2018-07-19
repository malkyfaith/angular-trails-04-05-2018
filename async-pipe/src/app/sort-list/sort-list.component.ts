import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'sort-list',
    template: `
        
        <h1>{{config.position}}</h1>
        <pre>{{runChangeDetection}}</pre> 
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortListComponent {
    //@Input() arr;

    @Input() config;

    ngOnInit() {
        //this.arr = ['asd', 45, 4, '12ads',78, 55, 13, 4, 5, 'zasd', 'cdas'];
        //this.arr = ['5', 'asd', '12ads','zasd', 'cdas', 'x', '12', '1', '0' ];
        //this.arr = [];
        //setInterval(() => this.arr = ['5', 'asd', '12ads', 'zasd', 'cdas', 'x', '12', '1', '0'], 1000);
      }

    click() {
        console.log('click')
    }

    get runChangeDetection() {
        console.log('Checking the view');
        return true;
      }
}