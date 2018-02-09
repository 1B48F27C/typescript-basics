import { Component, OnInit } from '@angular/core';
import { CODESAMPLES } from './mock.iterators';

@Component({
  selector: 'app-iterators',
  templateUrl: './iterators.component.html',
  styleUrls: ['./iterators.component.css']
})
export class IteratorsComponent implements OnInit {

  codeSamples = CODESAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
