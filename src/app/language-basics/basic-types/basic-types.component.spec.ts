import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTypesComponent } from './basic-types.component';

describe('BasicTypesComponent', () => {
  let component: BasicTypesComponent;
  let fixture: ComponentFixture<BasicTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});