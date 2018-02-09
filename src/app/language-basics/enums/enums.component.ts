import { Component, OnInit } from '@angular/core';
import { CODESAMPLES } from './mock.enums';

@Component({
  selector: 'app-enums',
  templateUrl: './enums.component.html',
  styleUrls: ['./enums.component.css']
})
export class EnumsComponent implements OnInit {

  codeSamples = CODESAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
