import { Component, OnInit } from '@angular/core';
import { VAR_DECLARATION_SAMPLES, LET_DECLARATION_SAMPLES, CONST_DECLARATION_SAMPLES } from './mock.variables';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  varSamples = VAR_DECLARATION_SAMPLES;
  letSamples = LET_DECLARATION_SAMPLES;
  constSamples = CONST_DECLARATION_SAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
