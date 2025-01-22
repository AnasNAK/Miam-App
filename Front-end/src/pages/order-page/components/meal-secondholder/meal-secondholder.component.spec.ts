import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSecondholderComponent } from './meal-secondholder.component';

describe('MealSecondholderComponent', () => {
  let component: MealSecondholderComponent;
  let fixture: ComponentFixture<MealSecondholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealSecondholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealSecondholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
