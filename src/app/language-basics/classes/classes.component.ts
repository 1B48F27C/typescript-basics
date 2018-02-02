import { Component, OnInit } from '@angular/core';
import { CODE_SAMPLES } from './mock.basic-types';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  
  codeSamples = CODE_SAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
