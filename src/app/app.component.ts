import { Component,OnInit } from '@angular/core';
import {HolidayServiceService} from './holiday-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HolidayServiceService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor (private _holidayservice: HolidayServiceService) {
   }
  ngOnInit(){
     this.title="app doe";
  }
}
