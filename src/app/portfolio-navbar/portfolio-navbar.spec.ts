import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNavbar } from './portfolio-navbar';

describe('PortfolioNavbar', () => {
  let component: PortfolioNavbar;
  let fixture: ComponentFixture<PortfolioNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
