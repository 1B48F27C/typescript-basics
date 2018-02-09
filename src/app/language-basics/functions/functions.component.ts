import { Component, OnInit } from '@angular/core';
import { CODESAMPLES } from './mock.functions';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

  codeSamples: string[] = CODESAMPLES;  

  constructor() { }

  ngOnInit() {
  }

}
