import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { MatChipInputEvent, MatAutocompleteTrigger } from '@angular/material';
import { element } from 'protractor';

@Injectable()
export class Service {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users')
  }

}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('input') textInput: ElementRef;
  searchCtrl = new FormControl();
  filteredOptions: Observable<any[]>;
  @ViewChild(MatAutocompleteTrigger) public autoComplete: any;

  chips: any[] = [];

  groups: Observable<any[]>

  constructor(private service: Service) {

    this.groups = this.service.getUsers();


    this.filteredOptions = this.searchCtrl.valueChanges
      .startWith(null)
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(val => {
        return this.filter(val || '')
      })

  }

  filter(val: string) {
    console.log(val);
    return this.groups
      .map(response => response.filter(option => {
        return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
      }));
  }

  public openPanel() {
    this.autoComplete.openPanel();
    this.filteredOptions = this.groups;
  }

  remove(f: any): void {
    const index = this.chips.indexOf(f);
    if (index >= 0) {
      this.chips.splice(index, 1);
    }
    this.filteredOptions = this.groups = this.groups.map(response => response.concat(f));
  }

  addSelect(event) {
    const input = event.input;
    let option = event.option;
    let value = option.value;
    if (value) {
      this.chips.push(value);
    }
    this.filteredOptions = this.groups = this.groups.map(response => response.filter(option => {
      return option.name !== value.name;
    }));

    if (this.textInput) {
      this.textInput.nativeElement.value = '';
    }
  }

  onChange(val) {
    this.filteredOptions = this.filter(val);
  }
}

