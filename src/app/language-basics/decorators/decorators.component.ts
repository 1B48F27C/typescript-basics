import { Component, OnInit } from '@angular/core';
import { CODESAMPLES } from './mock.basic-types';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {

  codeSamples = CODESAMPLES;
  
  constructor() { }

  ngOnInit() {
  }

}
