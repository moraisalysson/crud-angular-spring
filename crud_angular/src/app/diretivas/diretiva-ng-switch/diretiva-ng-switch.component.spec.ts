import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgSwitchComponent } from './diretiva-ng-switch.component';

describe('DiretivaNgSwitchComponent', () => {
  let component: DiretivaNgSwitchComponent;
  let fixture: ComponentFixture<DiretivaNgSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNgSwitchComponent]
    });
    fixture = TestBed.createComponent(DiretivaNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
