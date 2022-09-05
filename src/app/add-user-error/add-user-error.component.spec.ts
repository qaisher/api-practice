import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserErrorComponent } from './add-user-error.component';

describe('AddUserErrorComponent', () => {
  let component: AddUserErrorComponent;
  let fixture: ComponentFixture<AddUserErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
