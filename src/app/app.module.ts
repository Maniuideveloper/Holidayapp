import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule,Jsonp  } from '@angular/http';
import  {HolidayServiceService} from './holiday-service.service';
import {MdCardModule,MdInputModule,MdGridListModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { HolidayComponent } from './holiday/holiday.component';

const myRoutes: Routes = [
  {
    path: '',
    component: HolidayComponent,
    data: { title: 'Holiday List' }
  },
  { path: 'details/:id', component: HolidayDetailsComponent},
  { path: '**', redirectTo:'', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HolidayDetailsComponent,
    HolidayComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdInputModule,
    MdGridListModule,
    JsonpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers:[HolidayServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
