import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplaresViewComponent } from './ejemplares-view.component';

describe('EjemplaresViewComponent', () => {
  let component: EjemplaresViewComponent;
  let fixture: ComponentFixture<EjemplaresViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplaresViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplaresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
