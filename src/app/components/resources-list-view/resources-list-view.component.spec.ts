import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesListViewComponent } from './resources-list-view.component';

describe('ResourceViewComponent', () => {
  let component: ResourcesListViewComponent;
  let fixture: ComponentFixture<ResourcesListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
