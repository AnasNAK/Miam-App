import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAndInfoHolderComponent } from './payment-and-info-holder.component';

describe('PaymentAndInfoHolderComponent', () => {
  let component: PaymentAndInfoHolderComponent;
  let fixture: ComponentFixture<PaymentAndInfoHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentAndInfoHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAndInfoHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
