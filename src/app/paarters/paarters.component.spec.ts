import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaartersComponent } from './paarters.component';

describe('PaartersComponent', () => {
  let component: PaartersComponent;
  let fixture: ComponentFixture<PaartersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaartersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
