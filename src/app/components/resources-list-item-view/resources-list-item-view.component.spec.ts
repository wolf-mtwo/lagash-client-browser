import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesListItemViewComponent } from './resources-list-item-view.component';

describe('ResourcesListItemViewComponent', () => {
  let component: ResourcesListItemViewComponent;
  let fixture: ComponentFixture<ResourcesListItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesListItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesListItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
