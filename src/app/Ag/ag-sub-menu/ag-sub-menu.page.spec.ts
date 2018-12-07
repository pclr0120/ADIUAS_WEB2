import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSubMenuPage } from './ag-sub-menu.page';

describe('AgSubMenuPage', () => {
  let component: AgSubMenuPage;
  let fixture: ComponentFixture<AgSubMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgSubMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSubMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
