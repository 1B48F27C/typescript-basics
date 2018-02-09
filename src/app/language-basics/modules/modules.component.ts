import { Component, OnInit } from '@angular/core';
import { CODESAMPLES } from './mock.modules';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  codeSamples = CODESAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
