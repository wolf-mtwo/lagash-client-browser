import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestResourcesComponent } from './latest-resources.component';

describe('LatestResourcesComponent', () => {
  let component: LatestResourcesComponent;
  let fixture: ComponentFixture<LatestResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
