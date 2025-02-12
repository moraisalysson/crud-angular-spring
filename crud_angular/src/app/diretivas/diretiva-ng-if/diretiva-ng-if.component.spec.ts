import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgIfComponent } from './diretiva-ng-if.component';

describe('DiretivaNgIfComponent', () => {
  let component: DiretivaNgIfComponent;
  let fixture: ComponentFixture<DiretivaNgIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNgIfComponent]
    });
    fixture = TestBed.createComponent(DiretivaNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
