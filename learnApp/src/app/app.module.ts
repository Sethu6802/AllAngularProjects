import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DbComponent } from './db/db.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
