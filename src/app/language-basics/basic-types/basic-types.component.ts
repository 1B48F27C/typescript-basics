import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-types',
  templateUrl: './basic-types.component.html',
  styleUrls: ['./basic-types.component.css']
})
export class BasicTypesComponent implements OnInit {

  fillerContent = Array(50).fill(0).map(() =>
      `Text sample. Text sample. Text sample. Text sample. Text sample. Text sample. Text sample. Text sample.
       Text sample. Text sample. Text sample. Text sample. Text sample. Text sample. Text sample. Text sample.
       Text sample. Text sample. Text sample. Text sample. Text sample. Text sample. Text sample. Text sample.
       Text sample. Text sample. Text sample. Text sample. Text sample. Text sample. Text sample. Text sample.
       Text sample. Text sample. Text sample. Text sample.
       `);

  constructor() { }

  ngOnInit() {
  }

}