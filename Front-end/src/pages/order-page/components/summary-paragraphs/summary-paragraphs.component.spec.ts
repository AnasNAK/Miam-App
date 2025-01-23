import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryParagraphsComponent } from './summary-paragraphs.component';

describe('SummaryParagraphsComponent', () => {
  let component: SummaryParagraphsComponent;
  let fixture: ComponentFixture<SummaryParagraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryParagraphsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryParagraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
