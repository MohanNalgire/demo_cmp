import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyhistoryComponent } from './companyhistory.component';

describe('CompanyhistoryComponent', () => {
  let component: CompanyhistoryComponent;
  let fixture: ComponentFixture<CompanyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
