import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanygoalsComponent } from './companygoals.component';

describe('CompanygoalsComponent', () => {
  let component: CompanygoalsComponent;
  let fixture: ComponentFixture<CompanygoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanygoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanygoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
