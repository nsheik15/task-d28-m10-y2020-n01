import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {

  powerForm: FormGroup;
  val;

  get x() {
    return this.powerForm.get('x');
  }

  get n() {
    return this.powerForm.get('n');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.powerForm = this.fb.group({
      x : [''],
      n : ['']
    });
  }

  onFind() {
    this.val = Math.pow(this.x.value, this.n.value);
  }

}
