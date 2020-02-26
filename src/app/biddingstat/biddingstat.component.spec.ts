import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingstatComponent } from './biddingstat.component';

describe('BiddingstatComponent', () => {
  let component: BiddingstatComponent;
  let fixture: ComponentFixture<BiddingstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
