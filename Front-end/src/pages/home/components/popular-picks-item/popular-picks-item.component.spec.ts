import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPicksItemComponent } from './popular-picks-item.component';

describe('PopularPicksItemComponent', () => {
  let component: PopularPicksItemComponent;
  let fixture: ComponentFixture<PopularPicksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPicksItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularPicksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
