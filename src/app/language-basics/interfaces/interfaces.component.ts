import { Component, OnInit } from '@angular/core';
import { CODE_SAMPLES } from './mock.basic-types';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit {

  codeSamples = CODE_SAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
