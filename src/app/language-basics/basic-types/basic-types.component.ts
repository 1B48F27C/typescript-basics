import { Component, OnInit, Input } from '@angular/core';
import { CODESAMPLES } from './mock.basic-types';

@Component({
  selector: 'app-basic-types',
  templateUrl: './basic-types.component.html',
  styleUrls: ['./basic-types.component.css']  
})
export class BasicTypesComponent implements OnInit {
  @Input() currName: string;

  codeSamples = CODESAMPLES;

  constructor() {     
  }

  ngOnInit() {
  }
}