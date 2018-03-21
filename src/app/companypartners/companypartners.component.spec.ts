import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanypartnersComponent } from './companypartners.component';

describe('CompanypartnersComponent', () => {
  let component: CompanypartnersComponent;
  let fixture: ComponentFixture<CompanypartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanypartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanypartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
