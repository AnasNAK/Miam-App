import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealOrderItemComponent } from './meal-order-item.component';

describe('MealOrderItemComponent', () => {
  let component: MealOrderItemComponent;
  let fixture: ComponentFixture<MealOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealOrderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
