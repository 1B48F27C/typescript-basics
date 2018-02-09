import { Component, OnInit } from '@angular/core';
import { CODESAMPLES } from './mock.symbols';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {

  codeSamples = CODESAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
