import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDashComponent } from './enseignant-dash.component';

describe('EnseignantDashComponent', () => {
  let component: EnseignantDashComponent;
  let fixture: ComponentFixture<EnseignantDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnseignantDashComponent]
    });
    fixture = TestBed.createComponent(EnseignantDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
