import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamstatComponent } from './teamstat.component';

describe('TeamstatComponent', () => {
  let component: TeamstatComponent;
  let fixture: ComponentFixture<TeamstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
