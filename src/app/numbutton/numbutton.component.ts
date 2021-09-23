import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numbutton',
  templateUrl: './numbutton.component.html',
  styleUrls: ['./numbutton.component.css'],
})
export class NumbuttonComponent implements OnInit {
  constructor() {}

  @Input() num: any = '';

  @Output() msgEv = new EventEmitter<string>();

  ngOnInit(): void {}

  out(num: any) {
    this.msgEv.emit(num);
  }
}
