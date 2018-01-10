import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  basics_list: string[] = [
    "Basic Types",
    "Variables",
    "Interfaces",
    "Classes",
    "Functions",
    "Generics",
    "Enums",
    "Manipulations with Types",
    "Symbols",
    "Iterators and Generators",
    "Namespaces and Modules",
    "Decorators"
  ];
}
