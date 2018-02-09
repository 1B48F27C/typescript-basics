import { Component, OnInit } from '@angular/core';
import { CODESAMPLES } from './mock.generics';

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.css']
})
export class GenericsComponent implements OnInit {

  codeSamples = CODESAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
