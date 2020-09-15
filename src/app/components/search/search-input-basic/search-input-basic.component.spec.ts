import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputBasicComponent } from './search-input-basic.component';

describe('SearchInputBasicComponent', () => {
  let component: SearchInputBasicComponent;
  let fixture: ComponentFixture<SearchInputBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
