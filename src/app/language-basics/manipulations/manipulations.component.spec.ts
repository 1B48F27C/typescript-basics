import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulationsComponent } from './manipulations.component';

describe('ManipulationsComponent', () => {
  let component: ManipulationsComponent;
  let fixture: ComponentFixture<ManipulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
