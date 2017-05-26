import { Component, OnInit } from '@angular/core';
import {HolidayServiceService} from '../holiday-service.service';
import { Observable } from 'rxjs/Observable';
import { HolidayDetailsComponent } from '../holiday-details/holiday-details.component';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
   items ;
   public datakeys;
   public baseUrl = "/";
   values: number[] = [1, 2, 3];
   country;
   year=2015;
  childmessage : string = "I am passed from Parent to child component";

  constructor(private _holidayservice: HolidayServiceService) { }

  ngOnInit() {

   let data = this._holidayservice.getCountrydata('US',2015);
    data.subscribe(
      x=>{this.items=(x.holidays),y=>y,this.datakeys = Object.keys(x.holidays)
    },
      ()=>console.log("completed")
    );

    console.log(this.items);
  }

}
