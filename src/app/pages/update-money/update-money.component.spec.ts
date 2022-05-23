import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMoneyComponent } from './update-money.component';

describe('UpdateMoneyComponent', () => {
  let component: UpdateMoneyComponent;
  let fixture: ComponentFixture<UpdateMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
