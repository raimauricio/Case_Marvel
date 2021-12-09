import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgBuyComponent } from './msg-buy.component';

describe('MsgBuyComponent', () => {
  let component: MsgBuyComponent;
  let fixture: ComponentFixture<MsgBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
