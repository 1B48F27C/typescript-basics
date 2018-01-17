import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk/table';
import { BasicTypesComponent } from './language-basics/basic-types/basic-types.component';
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

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BasicTypesComponent,
    VariablesComponent,
    InterfacesComponent,
    ClassesComponent,
    FunctionsComponent,
    GenericsComponent,
    EnumsComponent,
    ManipulationsComponent,
    SymbolsComponent,
    IteratorsComponent,
    ModulesComponent,
    DecoratorsComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AccordionModule
  ],
  entryComponents: [SidenavComponent],
  providers: [],
  bootstrap: [AppComponent, SidenavComponent]
})
export class AppModule { }
