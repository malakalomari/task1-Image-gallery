import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './view/app.component';
import {ImageDetailsComponent} from './image-details.component';
import { LocalstorageService } from './controller/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
