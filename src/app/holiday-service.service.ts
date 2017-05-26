import { Injectable,Inject } from '@angular/core';
import { Jsonp, URLSearchParams,Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app/app.constants';

import 'rxjs/add/operator/map';


@Injectable()
export class HolidayServiceService {

  private methodUrl: string;
  Result;
  private times:number;
  

 // private _configuration:Configuration;
  constructor(private jsonp:Jsonp,private http:Http) { 
    this.times=0;
  }
  getCountrydata(country,year){  
    this.methodUrl='https://holidayapi.com/v1/holidays?action=opensearch&key=48bd974c-2019-49a8-b2bf-eb74175a9042&country='+country+'&year='+year+'&format=json';
    function myCallback(result){
      console.log(result);
    }
    let params = new URLSearchParams();
    const cbk = '__ng_jsonp__.__req' + this.times + '.finished';
    params.set('action', 'opensearch');
    params.set('key','48bd974c-2019-49a8-b2bf-eb74175a9042');
    params.set('country','US');
    params.set('year','2015');
    params.set('format', 'json');
    params.set('prefix','JSONP_CALLBACK');
        console.log(this.times);
    this.times=this.times+1;

   return this.http.get(this.methodUrl).map(response =>(response.json()));
   // return this.jsonp.get(this.methodUrl,{search:params}).map((response => <string[]> response.json()[1]));
 
    
   // .subscribe(success,failure,completed) map(response => response.json())
  }

}
