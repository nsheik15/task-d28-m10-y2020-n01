import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {

  obj = {
    a: 10,
    b: 20,
    getA: function() {
      console.log(this.a);
    },
    getB: function() {
      console.log(this.b);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.obj.getA();
    this.obj.getB();
  }

}
