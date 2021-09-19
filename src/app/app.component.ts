import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Whatsdirect';
  disabledButton = true;
  constructor(private http: HttpClient) {
    http.get('./assets/data/countryCodes.json').subscribe((data) => {
      let con = JSON.parse(JSON.stringify(data));
      con.forEach((e: any) => {
        if (e.code == 'IN') console.log(e);
      });
    });
  }

  numbersOnly(e: any, num: string) {
    this.disabledButton = num.length < 9;
    return parseInt(e.key) <= 9 && num.length <= 9;
  }

  lengthSpec(num: string) {
    this.disabledButton = num.length < 11;
  }

  redirect(val: any) {
    console.log(val);
    // this.http.get('https://ipinfo.io/').subscribe((loc) => {
    //   console.log(loc);
    // });
    window.location.href = `http://wa.me/+91${val}`;
  }
}
