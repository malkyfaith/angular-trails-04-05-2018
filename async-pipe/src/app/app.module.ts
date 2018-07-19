import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from 'src/app/sort.pipe';
import { SortListComponent } from 'src/app/sort-list/sort-list.component';

@NgModule({
  declarations: [
    AppComponent, SortPipe, SortListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
