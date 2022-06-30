import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafteyTipsComponent } from './saftey-tips.component';

describe('SafteyTipsComponent', () => {
  let component: SafteyTipsComponent;
  let fixture: ComponentFixture<SafteyTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafteyTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafteyTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
