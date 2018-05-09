import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfirmDialogComponent } from './create-confirm-dialog.component';

describe('CreateConfirmDialogComponent', () => {
  let component: CreateConfirmDialogComponent;
  let fixture: ComponentFixture<CreateConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
