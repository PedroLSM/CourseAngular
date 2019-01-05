import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolloweerComponent } from './followeer.component';

describe('FolloweerComponent', () => {
  let component: FolloweerComponent;
  let fixture: ComponentFixture<FolloweerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolloweerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolloweerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
