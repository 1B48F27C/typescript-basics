import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTypesComponent } from './language-basics/basic-types/basic-types.component'
import { VariablesComponent } from './language-basics/variables/variables.component';
import { InterfacesComponent } from './language-basics/interfaces/interfaces.component';
import { ClassesComponent } from './language-basics/classes/classes.component';
import { FunctionsComponent } from './language-basics/functions/functions.component';
import { GenericsComponent } from './language-basics/generics/generics.component';
import { EnumsComponent } from './language-basics/enums/enums.component';
import { ManipulationsComponent } from './language-basics/manipulations/manipulations.component';
import { SymbolsComponent } from './language-basics/symbols/symbols.component';
import { IteratorsComponent } from './language-basics/iterators/iterators.component';
import { ModulesComponent } from './language-basics/modules/modules.component';
import { DecoratorsComponent } from './language-basics/decorators/decorators.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'basictypes', component: BasicTypesComponent },
  { path: 'variables', component: VariablesComponent },
  { path: 'interfaces', component: InterfacesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'generics', component: GenericsComponent },
  { path: 'enums', component: EnumsComponent },
  { path: 'manipulations', component: ManipulationsComponent },
  { path: 'symbols', component: SymbolsComponent },
  { path: 'iterators', component: IteratorsComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'decorators', component: DecoratorsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
