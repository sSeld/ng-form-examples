import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormControl} from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() cityOn = false;
  @Input() stateOn = false;

  private city: FormControl;
  private state: FormControl;


  constructor(public ctrlCon: ControlContainer) {
  }

  ngOnInit() {
    this.city = new FormControl('', []);
    this.state = new FormControl('', []);
  }

}
