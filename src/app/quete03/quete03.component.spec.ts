import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quete03Component } from './quete03.component';

describe('Quete03Component', () => {
  let component: Quete03Component;
  let fixture: ComponentFixture<Quete03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quete03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quete03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
