import { HttpClient } from '@angular/common/http';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Whatsdirect';
  error = false;
  bksp = false;
  cnCode = '91';
  number = '+' + this.cnCode;
  buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  constructor(private http: HttpClient) {
    http.get('./assets/data/countryCodes.json').subscribe((data) => {
      let con = JSON.parse(JSON.stringify(data));
      con.forEach((e: any) => {
        if (e.code == 'IN') console.log(e);
      });
    });
  }
  ngDoCheck() {
    console.log('checked');
    this.bksp = this.number.length > 1;
  }

  lengthSpec(e: any, num: string) {
    console.log(parseInt(e.key) <= 9);
    if (e.key == 'Backspace' || parseInt(e.key) <= 9) return true;
    else return false;
  }

  reset() {
    this.error = false;
  }

  rcvEv(e: any) {
    this.number += e;
    // console.log(this.number);
  }

  backs() {
    let num = this.number.slice(0, -1);
    this.number = num;
    // console.log(num, this.number);
  }

  redirect(val: any) {
    console.log(val);
    if (val.length >= 10) window.location.href = `http://wa.me/${val}`;
    else alert('Please enter a valid number'); /*this.error = true;*/
    this.number = '+' + this.cnCode;
  }
}
