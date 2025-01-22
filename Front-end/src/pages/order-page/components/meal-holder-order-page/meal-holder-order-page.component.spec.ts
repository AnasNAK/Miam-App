import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealHolderOrderPageComponent } from './meal-holder-order-page.component';

describe('MealHolderOrderPageComponent', () => {
  let component: MealHolderOrderPageComponent;
  let fixture: ComponentFixture<MealHolderOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealHolderOrderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealHolderOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
