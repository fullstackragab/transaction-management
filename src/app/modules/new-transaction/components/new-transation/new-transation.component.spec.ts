import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransationComponent } from './new-transation.component';

describe('NewTransationComponent', () => {
  let component: NewTransationComponent;
  let fixture: ComponentFixture<NewTransationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
