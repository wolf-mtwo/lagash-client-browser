import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceInformationViewComponent } from './resource-information-view.component';

describe('ResourceInformationViewComponent', () => {
  let component: ResourceInformationViewComponent;
  let fixture: ComponentFixture<ResourceInformationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceInformationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
