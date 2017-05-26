import { Component, OnInit,Input, } from '@angular/core';
import {Router,Params, ActivatedRoute} from '@angular/router';
import {HolidayServiceService} from '../holiday-service.service';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {

   detailID;
   items;
   itemdetails;

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private _holidayservice: HolidayServiceService) { }

  ngOnInit() {
    this.detailID = this.activatedRoute.snapshot.params['id'];
     let getDeatilID = this._holidayservice.getCountrydata('US',2015);
     getDeatilID.subscribe(
      x=>{this.items=(x.holidays),y=>y,
      this.itemdetails = (this.items[this.detailID]),console.log(this.itemdetails)},
      ()=>console.log("completed")
    );

  }


}
