import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcDropdownItemComponent } from './dc-dropdown-item.component';

describe('DcDropdownItemComponent', () => {
  let component: DcDropdownItemComponent;
  let fixture: ComponentFixture<DcDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
